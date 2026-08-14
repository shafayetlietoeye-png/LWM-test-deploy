import { useEffect } from 'react';

export default function MuseumInNutshell() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Museum in a Nutshell</div>
                        <div className="hero-card__desc">
                            A quick overview of the history, collections, visitor statistics, and educational reach of the Liberation War Museum.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                {/* Block 1: Timeline */}
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Timeline</span>
                    </div>
                    <div className="block__content">
                        <ul>
                            <li><strong>Founded:</strong> March 22, 1996 (Segunbagicha, Dhaka)</li>
                            <li><strong>New Museum Inaugurated:</strong> April 16, 2017 (Agargaon, Dhaka)</li>
                        </ul>
                    </div>
                </section>

                {/* Block 2: Collections & Galleries */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Collections and Galleries</span>
                    </div>
                    <div className="block__content">
                        <ul>
                            <li><strong>Number of galleries:</strong> 4</li>
                            <li><strong>Archival collection:</strong> 21,000 items (as of August 2016)</li>
                            <li><strong>Items on display:</strong> 1,300</li>
                        </ul>
                        <p className="p" style={{ marginTop: '16px' }}>
                            <strong>Gallery & Facility Snapshot:</strong><br />
                            A modern museum with 3,500 sqm gallery space, international-standard exhibition facilities, archive labs, research centre, auditorium, seminar rooms, and public engagement spaces.
                        </p>
                    </div>
                </section>

                {/* Block 3: Visitors */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Visitors</span>
                    </div>
                    <div className="block__content">
                        <ul>
                            <li><strong>Total visitors:</strong> 893,213 (till September 18, 2021)</li>
                        </ul>
                    </div>
                </section>

                {/* Block 4: Outreach and Education */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Outreach and Education</span>
                    </div>
                    <div className="block__content">
                        <h3 style={{ marginTop: '0', fontSize: '1.25rem', marginBottom: '10px' }}>School Outreach Program</h3>
                        <ul style={{ marginBottom: '24px' }}>
                            <li><strong>Educational institutions reached:</strong> 873</li>
                            <li><strong>Network teachers:</strong> 1,518</li>
                            <li><strong>Students visited:</strong> 293,736</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>Mobile Reach-Out Program (via 2 buses)</h3>
                        <ul>
                            <li><strong>Students reached:</strong> 640,383</li>
                            <li><strong>Districts covered:</strong> 64</li>
                            <li><strong>Upazilas covered:</strong> 400</li>
                            <li><strong>Schools covered:</strong> 1,200</li>
                        </ul>
                    </div>
                </section>

                {/* Block 5: Impact */}
                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Impact</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum stands as a nationally and internationally recognized institution, connecting history with contemporary values through education, research, and public engagement.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
