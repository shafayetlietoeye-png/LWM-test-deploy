import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Donate() {
    useEffect(() => {
        // Apply body styles for donate page to match original HTML
        document.body.style.paddingTop = '120px';
        document.body.style.textAlign = 'center';
        document.body.style.color = '#F3EBD0';
        document.body.style.background = '#23221E';

        return () => {
            // Cleanup styles on unmount
            document.body.style.paddingTop = '';
            document.body.style.textAlign = '';
            document.body.style.color = '';
            document.body.style.background = '';
        };
    }, []);

    return (
        <div style={{ fontFamily: '"Roboto Slab", serif' }}>
            <h1 style={{ marginBottom: '20px', fontFamily: '"Roboto Slab", serif' }}>Donation Page</h1>
            <p>Thank you for your interest in supporting the Liberation War Museum.</p>
            <Link to="/" style={{ color: '#F3EBD0', marginTop: '20px', display: 'inline-block' }}>Back to Home</Link>
        </div>
    );
}
