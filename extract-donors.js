const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Read the docx file (it's a zip)
const docxPath = path.join(__dirname, 'public/assets/Archive Donors.docx');
const buf = fs.readFileSync(docxPath);

// Simple ZIP parser to find word/document.xml
// ZIP local file header signature: 0x04034b50
let offset = 0;
let xmlContent = null;

while (offset < buf.length - 4) {
  const sig = buf.readUInt32LE(offset);
  if (sig !== 0x04034b50) {
    offset++;
    continue;
  }
  
  const compressionMethod = buf.readUInt16LE(offset + 8);
  const compressedSize = buf.readUInt32LE(offset + 18);
  const filenameLength = buf.readUInt16LE(offset + 26);
  const extraLength = buf.readUInt16LE(offset + 28);
  const filename = buf.slice(offset + 30, offset + 30 + filenameLength).toString('utf8');
  
  const dataOffset = offset + 30 + filenameLength + extraLength;
  
  if (filename === 'word/document.xml') {
    const compressedData = buf.slice(dataOffset, dataOffset + compressedSize);
    if (compressionMethod === 8) {
      // Deflate
      xmlContent = zlib.inflateRawSync(compressedData).toString('utf8');
    } else {
      xmlContent = compressedData.toString('utf8');
    }
    break;
  }
  
  offset = dataOffset + compressedSize;
}

if (!xmlContent) {
  console.error('Could not find word/document.xml in the docx file');
  process.exit(1);
}

// Extract text from XML - get content from w:t elements
const textContent = [];
const regex = /<w:t[^>]*>([^<]*)<\/w:t>/g;
let match;
while ((match = regex.exec(xmlContent)) !== null) {
  textContent.push(match[1]);
}

// Write raw XML to check structure
fs.writeFileSync(path.join(__dirname, 'donors_raw.txt'), textContent.join('\n'));
console.log('Done! Written', textContent.length, 'text nodes to donors_raw.txt');
console.log('First 500 chars:', textContent.slice(0, 30).join(' '));
