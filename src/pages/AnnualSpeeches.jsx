import React, { useState, useEffect } from 'react';

export default function AnnualSpeeches() {
    const [selectedPdf, setSelectedPdf] = useState(null);

    useEffect(() => {
        document.body.classList.add('page-annual-speeches');
        return () => {
            document.body.classList.remove('page-annual-speeches');
        };
    }, []);

    const speeches = [
        { title: "Annual Speech 2021 (Helen Jervis)", pdf: null },
        { title: "Annual Speech 2019 (Ajoy Roy)", pdf: null },
        { title: "Annual Speech 2018 (Dr. Syed Anwar Hossain)", pdf: null },
        { title: "Annual Speech 2016 (Abul Momen)", pdf: null },
        { title: "Annual Speech 2015 (Biren Som)", pdf: null },
        { title: "Annual Speech 2014 (Adam Jones)", pdf: null },
        { title: "Annual Speech 2013 (Dr. Atiur Rahman)", pdf: null },
        { title: "Annual Speech 2012 (Richard Rogers)", pdf: null },
        { title: "Annual Speech 2011 (IAN Martin)", pdf: null }
    ];

    const openPdf = (e, pdfUrl) => {
        e.preventDefault();
        setSelectedPdf(pdfUrl || 'not-found');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closePdf = () => {
        setSelectedPdf(null);
        document.body.style.overflow = '';
    };

    return (
        <>
            {/* HERO (Annual Speeches Specific) */}
            <section className="hero hero--annual-speeches">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Annual Speeches</div>
                        <div className="hero-card__desc">
                            Explore the collection of annual speeches and prominent addresses from the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <div className="section-paper">
                    <section className="block">
                        <div className="separator"></div>
                        <div className="block__cap">
                            <span className="cap__title">Speeches</span>
                        </div>

                        <div className="block__content">
                            <div className="speeches-list">
                                {speeches.map((speech, index) => (
                                    <a
                                        key={index}
                                        href="#"
                                        className="speech-link"
                                        onClick={(e) => openPdf(e, speech.pdf)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="pdf-icon">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <path d="M9 15h6"></path>
                                            <path d="M9 11h6"></path>
                                        </svg>
                                        {speech.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* PDF MODAL */}
            {selectedPdf && (
                <div className="pdf-modal-overlay" onClick={closePdf}>
                    <div className="pdf-modal-header" onClick={(e) => e.stopPropagation()}>
                        <button className="pdf-modal-close" onClick={closePdf}>&times;</button>
                    </div>
                    <div className="pdf-modal-content" onClick={(e) => e.stopPropagation()}>
                        {selectedPdf === 'not-found' ? (
                            <div className="pdf-not-found">
                                <h3>PDF Not Found</h3>
                                <p>We're sorry, this speech PDF is currently unavailable.</p>
                            </div>
                        ) : (
                            <iframe
                                src={`${selectedPdf}#toolbar=0`}
                                title="Annual Speech PDF"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                            ></iframe>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}
