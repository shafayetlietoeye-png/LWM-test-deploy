import { useEffect, useState } from 'react';

const galleryImages = [
    "/assets/about/Museum Story/new museum gallary/486684719_1397389161322901_924041236047675431_n.jpg",
    "/assets/about/Museum Story/new museum gallary/486849868_1397388931322924_2389496269851940210_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487085701_1397388994656251_9209520191380822805_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487176202_1397389167989567_4822906935720972309_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487288271_1397388921322925_1168712406254236781_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487296498_1397389114656239_2796252311038123278_n.jpg",
    "/assets/about/Museum Story/new museum gallary/487451080_1397389171322900_6692153961002969969_n (1).jpg",
    "/assets/about/Museum Story/new museum gallary/487470578_1397389181322899_7870089113457840626_n.jpg"
];

export default function Accreditations() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(1);

    useEffect(() => {
        document.body.classList.add('page-accreditations');
        return () => {
            document.body.classList.remove('page-accreditations');
        };
    }, []);

    const openLightbox = (index) => {
        setSelectedIndex(index);
        setZoomLevel(1);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
        setZoomLevel(1);
        document.body.style.overflow = 'auto';
    };

    const showNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
        setZoomLevel(1);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
        setZoomLevel(1);
    };

    const handleZoomIn = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = (e) => {
        e.stopPropagation();
        setZoomLevel(prev => Math.max(prev - 0.5, 1));
    };

    return (
        <>
            {/* HERO (Accreditations Specific) */}
            <section className="hero hero--accreditations">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Accreditations  & <br />  Affiliations</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum is a founding member of the International Coalition of Sites of Conscience and is registered with the NGO Bureau of Bangladesh.
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
                        <h3>Accreditation and Affiliations</h3>
                        <p className="p">
                            The Liberation War Museum is a founding member of the International Coalition of Sites of Conscience and is registered with the NGO Bureau of Bangladesh.
                        </p>
                        <p className="p">
                            The Liberation War Museum is also an Institutional Member at the International Association of Genocide Scholars (IAGS). The International Association of Genocide Scholars is a global, interdisciplinary, non-partisan organization that seeks to further research and teaching genocide studies and prevention.
                        </p>
                        <p className="p">
                            The Muktijuddha Smriti Trust, under which the Museum has been established, is registered under the Societies Act XXI, of 1860 as a non-profit organization and is also registered with the Registrar of Joint Stock Companies, Bangladesh. All contributions made to the Muktijuddha Jadughar come under the CSR program launched by the Government and has been declared as tax-free.
                        </p>

                        <h3>The museum in a nutshell</h3>
                        <ul>
                            <li><strong>Founded:</strong> 22 March 1996</li>
                            <li><strong>Number of galleries:</strong> 04</li>
                            <li><strong>Number of visitors:</strong> 8, 93, 213 (till 18 September 2021)</li>
                            <li><strong>Mirpur Jalladkhana (Killing Field Memorial):</strong> Number of visitors - 8,22, 585 (till 19 September 2021)</li>
                            <li><strong>School Outreach program:</strong> Total visited educational institutions 873, Network Teachers 1518, total students visited the museum under this program - 2,93,736. (till August 2021)</li>
                        </ul>
                    </div>
                </section>

                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Liberation War Museum Activities</span>
                    </div>
                    <div className="block__content">
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-date">June, 1994</div>
                                <div className="timeline-text">The idea of the Trust was floated with an agenda to start the Liberation War Museum.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">December, 1994</div>
                                <div className="timeline-text">A Photographic album containing 100 historic photographs portraying the Liberation struggle of Bangali people from the beginning (British Period) ending with the establishment of Bangladesh. The format of this album was such that it could be mounted anywhere for an exhibition.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">March, 1995</div>
                                <div className="timeline-text">A Photographic exhibition on the “Liberation War : Towards 25th Anniversary” held at ‘ La Galerie’ in Dhaka.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">June, 1995</div>
                                <div className="timeline-text">Registration of the Trust with 8 Trustees and public announcement.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">July, 1995</div>
                                <div className="timeline-text">Exchange of opinions and views about the proposed Liberation War Museum.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">September, 1995</div>
                                <div className="timeline-text">Renting of the building for the museum and refurbishing work begins.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">October, 1995</div>
                                <div className="timeline-text">Authentication Committee constituted with Prof. Dr. Anisuzzaman, Prof. Dr. Salahuddin Ahmed, Air Vice-Marshal (retd.) A. K. Khandker, and Dr. Syed Anwar Hossain as members.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">October, 1995</div>
                                <div className="timeline-text">Trustees begin touring the districts to exchange views with people and request for collection of objects and documents for the Museum.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">October, 1995</div>
                                <div className="timeline-text">With Begum Sufia Kamal and Air Vice-Marshal (retd.) A. K. Khandker in the chair the official collection of memorabilia begins at the museum premises.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">22 March, 1996</div>
                                <div className="timeline-text">The Liberation War Museum opens officially with the lighting of the eternal flame by the family members of the Martyrs of 1971 War of Liberation.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">August, 1996</div>
                                <div className="timeline-text">Reception to Journalist Simon Dring, the first foreign journalist who gave an eye witness report in the Daily Telegraph on 30 April, 1971.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">October, 1996</div>
                                <div className="timeline-text">Well known Calcutta based singer Shumon Chaterjee holds five successful concerts to raise fund for the Museum.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">November, 1996</div>
                                <div className="timeline-text">Reception to famous Indian photographer Amiya Tarafdar, whose photographs of the War and suffering raised World consciousness for the Bangladesh cause.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">December, 1996</div>
                                <div className="timeline-text">Various programs to celebrate the 25th. Anniversary of victory in the Liberation War.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">January, 1997</div>
                                <div className="timeline-text">Collection of objects and Documents from Individuals. This process continues.</div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-date">February, 1997</div>
                                <div className="timeline-text">Opening of the Cafe Theater with the staging of a play by Nagorik Natyo Shamprodai followed by dinner.</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">The New Museum</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            In 2009, the Museum acquired just under an acre of land in Agargaon, Dhaka, to construct a full-fledged museum. A country-wide competition was floated and out of 70 entries for the architectural design, a jury board, some of whose members were overseas experts, selected a design which currently is being erected. The new building has been inaugurated by the Honourable Prime Minister of the country, Sheikh Hasina on April 16, 2017. The new building has the following features:
                        </p>
                        <ul>
                            <li>Regular gallery space for displays: 3,500 sqm.</li>
                            <li>Temporary gallery for exhibitions, which meets the IMO and other international specifications: 500 sqm.</li>
                            <li>Library and research centre, 300 sqm.</li>
                            <li>Space for two Institutes, The Institute for Liberation War Studies and the Centre for the Study in Genocide and Justice</li>
                            <li>An amphitheatre for holding school programmes</li>
                            <li>An covered and open space for assembly which can also be used as additional viewing area with large-screen projectors in case of visitor overflow from the auditorium</li>
                            <li>Stage and auditorium, equipped with latest sound and light systems seating 260 people</li>
                            <li>Three seminar rooms, the largest of which has space for 50 people</li>
                            <li>Archive and processing lab. which meet international requirements for archiving</li>
                            <li>Gas suppression systems for the archive and the data storage areas and sprinkler system for the rest</li>
                            <li>Parking for 106 cars</li>
                            <li>Kiosk, canteen and a space for “adda”</li>
                        </ul>
                        <p className="p">
                            Although not classified as “green”, the building has some features like conservation of rainwater, water reuse, LED lamps, and solar cells supplying part of the energy requirements which demonstrates the Museum’s commitment to the environment and society in general.
                        </p>

                        <h3>Gallery</h3>
                        <div className="museum-gallery-grid">
                            {galleryImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`New Museum Gallery ${index + 1}`}
                                    className="gallery-img"
                                    onClick={() => openLightbox(index)}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* LIGHTBOX MODAL */}
            {selectedIndex !== null && (
                <div className="lightbox" onClick={closeLightbox}>
                    <div className="lightbox-zoom-controls" onClick={(e) => e.stopPropagation()}>
                        <button onClick={handleZoomOut} disabled={zoomLevel <= 1}>−</button>
                        <span>{Math.round(zoomLevel * 100)}%</span>
                        <button onClick={handleZoomIn} disabled={zoomLevel >= 3}>+</button>
                    </div>

                    <span className="lightbox-close" onClick={closeLightbox}>&times;</span>

                    <button className="lightbox-prev" onClick={showPrev}>
                        <img src="/assets/icon/left arrow.png" alt="Previous" />
                    </button>

                    <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <img
                            className="lightbox-content"
                            src={galleryImages[selectedIndex]}
                            alt={`Gallery image ${selectedIndex + 1}`}
                            style={{
                                width: `${90 * zoomLevel}vw`,
                                height: `${90 * zoomLevel}vh`
                            }}
                        />
                        <div className="lightbox-counter">
                            {selectedIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    <button className="lightbox-next" onClick={showNext}>
                        <img src="/assets/icon/right arrow.png" alt="Next" />
                    </button>
                </div>
            )}
        </>
    );
}

