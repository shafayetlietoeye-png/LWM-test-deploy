import { useEffect } from 'react';

export default function Accreditations() {
    useEffect(() => {
        document.body.classList.add('page-accreditations');
        return () => {
            document.body.classList.remove('page-accreditations');
        };
    }, []);

    const affiliations = [
        {
            title: "International Coalition of Sites of Conscience (ICSC)",
            description: "The Liberation War Museum is a founder member of the International Coalition of Sites of Conscience (established in 1998). The Coalition connects historic sites with contemporary social and human rights issues.",
            subTitle: "Notable member institutions include:",
            items: [
                "District Six Museum (South Africa)",
                "Slave Museum (Senegal)",
                "Terezin Memorial (Czechoslovakia)",
                "Civil Rights Museum (USA)",
                "Tenement Museum (USA)"
            ]
        },
        {
            title: "NGO Affairs Bureau, Bangladesh",
            description: "The Liberation War Museum is registered with the NGO Affairs Bureau of Bangladesh."
        },
        {
            title: "International Association of Genocide Scholars (IAGS)",
            description: "The Museum is an Institutional Member of IAGS, a global, interdisciplinary, and non-partisan organization dedicated to advancing research, education, and prevention of genocide."
        },
        {
            title: "Muktijuddha Smriti Trust",
            description: "The Museum operates under the Muktijuddha Smriti Trust. The Trust is registered under the Societies Act XXI of 1860 as a non-profit organization and registered with the Registrar of Joint Stock Companies, Bangladesh."
        },
        {
            title: "CSR and Tax Exemption Status",
            description: "Contributions to the Liberation War Museum fall under the Government’s CSR (Corporate Social Responsibility) program. All such contributions are declared tax-exempt."
        }
    ];

    return (
        <>
            {/* HERO */}
            <section className="hero hero--accreditations">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Accreditations  & <br />  Affiliations</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is a founding member of international organizations and registered with national trusts and authorities.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Affiliations</span>
                    </div>

                    <div className="block__content">
                        {affiliations.map((aff, index) => (
                            <div key={index} style={{ marginBottom: index === affiliations.length - 1 ? 0 : '40px' }}>
                                <h3 style={{ margin: '0 0 12px 0', fontSize: '1.35rem' }}>{aff.title}</h3>
                                <p className="p" style={{ marginBottom: aff.items ? '14px' : 0 }}>
                                    {aff.description}
                                </p>
                                {aff.items && (
                                    <>
                                        <p className="p" style={{ fontWeight: '700', marginBottom: '8px', color: '#111' }}>
                                            {aff.subTitle}
                                        </p>
                                        <ul style={{ marginBottom: 0 }}>
                                            {aff.items.map((item, subIdx) => (
                                                <li key={subIdx}>{item}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
