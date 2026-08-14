import { useState, useEffect } from 'react';

const SPEECHES = [
    { year: '2021', speaker: 'Helen Jervis',             topic: 'International Advocacy and the Road to Recognition for 1971', pdf: null },
    { year: '2019', speaker: 'Ajoy Roy',                 topic: 'Secularism, Science, and the Spirit of the Liberation War', pdf: null },
    { year: '2018', speaker: 'Dr. Syed Anwar Hossain',  topic: 'Historiography of 1971: Documenting and Preserving the Truth', pdf: null },
    { year: '2016', speaker: 'Abul Momen',               topic: 'Cultural Mobilisation and the Democratic Spirit of the Struggle', pdf: null },
    { year: '2015', speaker: 'Biren Som',                topic: 'Civil Society, Art, and Rebuilding the Post-War Nation', pdf: null },
    { year: '2014', speaker: 'Adam Jones',               topic: 'Bangladesh 1971 in the Global Context of Comparative Genocide Studies', pdf: null },
    { year: '2013', speaker: 'Dr. Atiur Rahman',         topic: 'The Economic Vision of Sonar Bangla and Post-War Recovery', pdf: null },
    { year: '2012', speaker: 'Richard Rogers',           topic: 'International Law, Justice, and Accountability for War Crimes', pdf: null },
    { year: '2011', speaker: 'IAN Martin',               topic: 'The United Nations, Human Rights, and the Legacy of the Liberation War', pdf: null },
];

export default function AnnualSpeeches() {
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [modalSpeech, setModalSpeech] = useState(null);

    useEffect(() => {
        document.body.classList.add('page-museum-story');
        document.title = 'Annual Speeches | Liberation War Museum';
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    const openSpeech = (speech) => {
        setSelectedPdf(speech.pdf || 'not-found');
        setModalSpeech(speech);
        document.body.style.overflow = 'hidden';
    };

    const closePdf = () => {
        setSelectedPdf(null);
        setModalSpeech(null);
        document.body.style.overflow = '';
    };

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Annual Speeches</div>
                        <div className="hero-card__desc">
                            Explore the collection of annual keynote addresses and memorial speeches delivered at the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Annual Speeches</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            Each year, the Liberation War Museum hosts an Annual Memorial Lecture, inviting distinguished scholars, human rights defenders, and public intellectuals to address key aspects of historical memory, genocide prevention, and human rights.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Speeches Archive</span>
                    </div>
                    <div className="block__content">
                        <div className="speeches-shelf">
                            {SPEECHES.map((speech) => (
                                <div key={speech.year} className="speech-book-wrapper">
                                    {/* Physical booklet cover */}
                                    <div 
                                        className={`speech-book${speech.pdf ? ' speech-book--link' : ''}`}
                                        onClick={() => openSpeech(speech)}
                                    >
                                        <div className="speech-book__spine"></div>
                                        <div className="speech-book__cover">
                                            <div className="speech-book__header">
                                                <span>Liberation War Museum</span>
                                                <span>Annual Speech Series</span>
                                            </div>
                                            
                                            <div className="speech-book__seal-bg"></div>

                                            <div className="speech-book__middle">
                                                <div className="speech-book__year">{speech.year}</div>
                                                <div className="speech-book__speaker">{speech.speaker}</div>
                                                <div className="speech-book__divider"></div>
                                                <div className="speech-book__title">"{speech.topic}"</div>
                                            </div>

                                            {/* Ribbon / label tag on bottom indicating if it is PDF */}
                                            <div className="speech-book__footer">
                                                <div className={`speech-book__badge${speech.pdf ? ' speech-book__badge--available' : ''}`}>
                                                    {speech.pdf ? 'Open Document' : 'Archive File'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Small metadata text label below book */}
                                    <div className="speech-book-label">
                                        <span className="speech-book-label__year">Speech {speech.year}</span>
                                        <button 
                                            className={`speech-book-label__btn${speech.pdf ? ' speech-book-label__btn--available' : ''}`}
                                            onClick={() => openSpeech(speech)}
                                        >
                                            {speech.pdf ? 'Open PDF' : 'Unavailable'}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* SPEECH MODAL */}
            {selectedPdf && (
                <div className="speech-modal-overlay" onClick={closePdf}>
                    <div className="speech-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="speech-modal__header">
                            <div className="speech-modal__header-info">
                                <span className="speech-modal__year">{modalSpeech?.year}</span>
                                <span className="speech-modal__title">
                                    Annual Speech — {modalSpeech?.speaker}
                                </span>
                            </div>
                            <button className="speech-modal__close" onClick={closePdf} aria-label="Close">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                                </svg>
                            </button>
                        </div>
                        <div className="speech-modal__body">
                            {selectedPdf === 'not-found' ? (
                                <div className="speech-modal__paper-doc">
                                    <div className="speech-modal__paper-header">
                                        <span>LIBERATION WAR MUSEUM ARCHIVES</span>
                                        <span>ESTD: 1996 · DHAKA, BANGLADESH</span>
                                    </div>
                                    <div className="speech-modal__paper-body">
                                        <div className="speech-modal__paper-stamp">Preservation Scan Pending</div>
                                        <h2 className="speech-modal__paper-heading">ANNUAL MEMORIAL SPEECH</h2>
                                        
                                        <div className="speech-modal__paper-details">
                                            <div className="speech-modal__paper-row">
                                                <strong>YEAR:</strong>
                                                <span>{modalSpeech?.year}</span>
                                            </div>
                                            <div className="speech-modal__paper-row">
                                                <strong>SPEAKER:</strong>
                                                <span>{modalSpeech?.speaker}</span>
                                            </div>
                                            <div className="speech-modal__paper-row">
                                                <strong>SUBJECT:</strong>
                                                <span>"{modalSpeech?.topic}"</span>
                                            </div>
                                            <div className="speech-modal__paper-row">
                                                <strong>STATUS:</strong>
                                                <span>ARCHIVED PHYSICAL COLLECTION</span>
                                            </div>
                                        </div>

                                        <p className="speech-modal__paper-note">
                                            This official transcript is currently undergoing digital archival processing. The high-resolution PDF document is scheduled for preservation release and will be viewable online shortly.
                                        </p>
                                    </div>
                                    <div className="speech-modal__paper-footer">
                                        <div className="speech-modal__paper-signature">
                                            <div className="speech-modal__sig-line"></div>
                                            <span>Chief Archivist, LWM</span>
                                        </div>
                                        <div className="speech-modal__paper-seal">
                                            <span>OFFICIAL SEAL</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <iframe
                                    src={`${selectedPdf}#toolbar=0`}
                                    title={`Annual Speech ${modalSpeech?.year}`}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
