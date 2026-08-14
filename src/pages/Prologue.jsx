import { useEffect } from 'react';

export default function Prologue() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO (Prologue Page) */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Museum Prologue</div>
                        <div className="hero-card__desc">
                            Established in 1996, Dhaka's Liberation War Museum commemorates Bangladesh's 1971 independence while promoting human rights and democracy.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Establishment and Historical Significance</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum in Dhaka, Bangladesh was established in 1996. It commemorates the heroic struggle of the Bengali nation for their democratic and national rights. The struggle turned into an armed conflict following the genocide unleashed by the military rulers of Islamic Republic of Pakistan and culminated with the emergence of Bangladesh as a secular, democratic state in December 1971.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Historical Context and Liberation War</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            Communal tensions between Hindus and Muslims, intensified under British colonial rule, led to the partition of India in 1947 and the creation of Pakistan as a separate homeland for Muslims. This division fractured Bengal’s historically pluralistic society and left East Pakistan geographically and politically isolated from West Pakistan. Systematic political, cultural, and economic marginalization of Bengalis deepened discontent. After the 1970 elections, the refusal to transfer power led to the genocide of March 25, 1971, and eventually to the emergence of Bangladesh as a secular, democratic state.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Mission and Institutional Role</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The prime objective of the museum is to make the new generations aware about the aspirations for which their forefathers had fought and the spirit of inclusiveness and tolerance that has been the hallmark of this part of Eastern India. It also encourages them to take a firm stand against violations of human rights and the acts of genocide carried out in 1971.
                        </p>
                        <p className="p">
                            The Liberation War Museum is the outcome of a citizen’s effort and is run by a Board of Trustees. It is now recognized, nationally and internationally, as a credible institution on the history of Bangladesh’s independence. The museum, through its special programs endeavours to link history of the Liberation War with contemporary pressing social and human rights issues. LWM is a founding member of the International Coalition of Sites of Conscience and is an institutional member of the American Association of Museums and ICOM.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Infrastructure and Expansion</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            The museum was originally established in 1996 at Segunbagicha and is now located in Agargaon. The earlier facility was housed in a two-storied colonial building with displays across six galleries. A purpose-built museum complex, covering approximately 20,000 sq. m. and incorporating modern concepts of display and archiving, was inaugurated on April 16, 2017 by the former Prime Minister of Bangladesh, Sheikh Hasina.
                        </p>
                        <p className="p">
                            The Liberation War Museum has also excavated two killing fields in the suburbs of Dhaka and preserved one site; the recovered human remains have added a significant dimension to the museum’s displays.
                        </p>
                    </div>
                </section>

                <section className="block">
                    <div className="block__cap">
                        <span className="cap__title">Educational Programs and Public Engagement</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            Attempts have been made through the museum displays and its regular programmes for visitors to the museum to realise how the fundamental principles of democracy, secularism and nationalism embodied in the Bangladesh Constitution (1972) evolved through popular struggle and human sacrifices.
                        </p>
                        <p className="p">
                            The most important of the programmes are two school programs, one for Dhaka city and a traveling museum for schools in the remote villages to create a living museum where visitors/participants can draw contemporary relevance for building national unity and a tolerant and secular society and fight abuses of human rights.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
