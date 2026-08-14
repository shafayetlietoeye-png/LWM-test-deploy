import { useEffect } from 'react';

export default function MissionStatement() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO (Mission Statement Page) */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Mission Statement</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is dedicated to honoring the struggle for independence, preserving memory, and inspiring future generations towards justice, democracy, and human rights.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Purpose</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            A museum dedicated to all freedom loving people and to the victims of mindless atrocities and destruction committed in the name of religion, ethnicity and sovereignty.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Reflection and Ideals</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The museum encourages reflection upon the sufferings and heroism of The Bangladesh Liberation War and its ideals.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Contemporary Relevance</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum endeavors to link this history with contemporary pressing social and humanitarian issues.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
