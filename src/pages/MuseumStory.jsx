import { useEffect } from 'react';

export default function MuseumStory() {
    useEffect(() => {
        document.body.classList.add('page-museum-story');
        return () => {
            document.body.classList.remove('page-museum-story');
        };
    }, []);

    return (
        <>
            {/* HERO (Museum Story Specific) */}
            <section className="hero hero--museum-story">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush hero-card--wide">
                        <div className="hero-card__title">Museum Story</div>
                        <div className="hero-card__desc">
                            The Liberation War Museum in Dhaka, founded in 1996, honors the Bengali struggle that led to Bangladesh’s independence as a secular, democratic nation in 1971.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT SECTION (Placeholder) */}
            <main className="museum-story-content">
                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Overview</span>
                    </div>

                    <div className="block__content">
                        <p className="p">
                            The Liberation War Museum in Dhaka, Bangladesh was established in 1996. It commemorates the heroic struggle of the Bengali nation for their democratic and national rights. The struggle turned into an armed conflict following the genocide unleashed by the military rulers of Islamic Republic of Pakistan and culminated with the emergence of Bangladesh as a secular, democratic state in December 1971.
                        </p>

                        <p className="p">
                            Hindu-Muslim communal tensions fanned by the British colonial rulers to perpetuate their hold on India had led to the partition of India in 1947. Pakistan was created as a separate homeland for Muslims. This unnatural separation of the Bengali society on the basis of religion created deep fissures in a society – which had hitherto had a pluralistic character. The Province of East Pakistan was physically separated from West Pakistan by a thousand miles. Pakistan therefore, was an unrealistic and a dysfunctional state from the very beginning. The Pakistani ruling elite controlled by the military elite subjugated the Bengalis politically, culturally and economically and therefore the disillusionment with the new nation was not surprising. In the first-ever national Parliamentary elections held in 1970 based on a one man-one vote basis, the Bengali nationalist forces led by Bangabandhu Sheikh Mujibur Rahman won landslide victory and his party, the Awami League became the majority party of Pakistan as a whole, and in accordance with democratic norms, was expected to form the new government. However, in an attempt to crush this nationalistic movement, the Pakistani Military Junta unleashed a systematic genocide against the Bengali people on the fateful night of March 25, 1971. The Junta received support only from a handful religion-based local parties and religious fundamentalists. The Pakistani rampage in the nine months of 1971 resulted in the worst genocide since the Second World War, and an estimated 3 million people were killed, some 278,000 women were raped and 10 million had to take refuge in neighboring India. A government in exile was quickly formed and the resistance started becoming more and more co-ordinated. Young people from the villages and students took military training and the Mukti Bahini (freedom fighters) started fighting back the occupation forces divided into 11 Sectors, adopting guerilla tactics and kept the Pakistani army in a harassed and indefensible state. By September these half trained young men had infiltrated deep inside Bangladesh and a large part of the country was virtually self ruled. On December 3, after Pakistan attacked and bombed airfields in the western part of India, the Allied Command of the Indian Army and the Muktibahini (Bangladesh Freedom Fighters) was formed and they started the formal armed assault. On December 16, 1971, the Pakistani Armed Forces ignominiously surrendered to this Allied Command and independent Bangladesh was born as democratic and secular state.
                        </p>
                        <p className="p">
                            The prime objective of the museum is to make the new generations aware about the aspirations for which their forefathers had fought and the spirit of inclusiveness and tolerance that has been the hallmark of this part of Eastern India. It also encourages them to take a firm stand against violations of human rights and the acts of genocide carried out in 1971. The Liberation War Museum is the outcome of a citizen’s effort and is run by a Board of Trustees. It is now recognized, nationally and internationally, as a credible institution on the history of Bangladesh’s independence. The museum, through its special programs endeavours to link history of the Liberation War with contemporary pressing social and human rights issues. LWM is a founder member of International Coalition of Sites of Conscience is an institutional member of the American Association of Museums and ICOM.
                        </p>
                        <p className="p">
                            The museum was housed in a two-storied Colonial building with displays in six galleries. Currently, the museum has in its collection 21,000 (August 2016) objects, which include rare photographs, documents, coverage in both electronic and print media and materials used by freedom fighters and martyrs of the Liberation War. However the museum was able to display only around 1,300 objects due to paucity of space. A proper museum with an area of about 20,000 sq. m., endowed with modern concepts of display and archiving has been inaugurated by the Prime Minister of Bangladesh, Sheikh Hasina on April 16, 2017. The Liberation War Museum excavated two killing fields in the Dhaka suburbs and preserves one site, and these human remains have added dimension to the displays.
                        </p>
                        <p className="p">
                            Attempts have been through the museum displays and its regular programmes for visitors to the museum to realise how the fundamental principles of democracy, secularism and nationalism embodied in the Bangladesh Constitution (1972) evolved through popular struggle and human sacrifices. The most important of the programmes are two school programs, one for Dhaka city and a traveling museum for schools in the remote villages to create a living museum where visitors/participants can draw contemporary relevance for building national unity and a tolerant and secular society and fight abuses of human rights.
                        </p>


                        <h3>Information about the museum in a Nutshell :</h3>
                        <ul>
                            <li><strong>Founded :</strong> 22 March 1996</li>
                            <li><strong>Number of displays in archives :</strong> 21,000 (August 2016)</li>
                            <li><strong>Number displayed:</strong> 1,300 (August 2016)</li>
                            <li><strong>Number of visitors:</strong> 6,13,889 (October 2016)</li>
                            <li><strong>Visitors to the Mirpur Jalladkhana:</strong> 496,000 (July 2014)</li>
                            <li><strong>School Outreach program :</strong> Dhaka city 178,000 (Aug 2016)</li>
                            <li><strong>Reach-out program (through two buses) :</strong> 6,40, 383 students, districts covered-64, upazillas 400, schools 1200.</li>
                        </ul>

                        <h3>Associate yourself as member of LWM effort</h3>
                        <p className="p">
                            Membership fees and other donations can be send to our office or directly to accounts Muktijuddha Jadughar, A/C No. 210 530 51 of Mercantile Bank Limited, Main Branch, Dhaka.
                        </p>
                        <p className="p">
                            Members receive Membership Card allowing free entrance to the museum, invitation to museum programmes and museum publications. Name of Sponsor Member and Charter Members appear at the museum entrance and they receive Liberation War Museum crest.
                        </p>

                        <h3>Object Collections</h3>
                        <p className="p">
                            Main asset of the museum are objects relating to Bengali nation’s struggle for democracy and national rights and liberation war that led to the emergence of independent Bangladesh. If you have in your possession or have knowledge of where such objects could be available please inform our office at your convenience. Such objects will enrich the display and the archive of LWM.
                        </p>

                        <h3>Other Supports</h3>
                        <p className="p">
                            We also look forward to other support in the form of –
                        </p>
                        <ul>
                            <li>
                                <strong>Professional Expertise:</strong> The Museum welcomes all professional support for improving museum displays and program. For instance ‘International Consortium for Energy Development’ helped the museum with solar energy to cut down electricity costs.
                            </li>
                            <li>
                                <strong>Programme Support:</strong> This can be in the form of project financing e.g. Freedom Foundation in student’s Outreach Program and Manusher Jonno (Care Bangladesh fund) in upholding liberation history and promoting Human Rights and Peace Education for Students. The museum also welcomes your suggestions and help for further improving its existing programs.
                            </li>
                            <li>
                                <strong>Exchange Program:</strong> Liberation War Museum is interested in building partnerships with organizations, institutions and individuals with similar objectives through exchange of views and information.
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="block">
                    <div className="separator"></div>
                    <div className="block__cap">
                        <span className="cap__title">Mission Statement</span>
                    </div>
                    <div className="block__content">
                        <p className="p">
                            A museum dedicated to all freedom loving people and to the victims of mindless atrocities and destruction committed in the name of religion, ethnicity and sovereignty. The museum encourages reflection upon the sufferings and heroism of The Bangladesh Liberation War and its ideals. Liberation War Museum endeavors to link this history with contemporary pressing social and humanitarian issues.
                        </p>

                        <h3>Museum Hours</h3>
                        <p className="p">
                            The Museum is open on all weekdays except Sunday between 10:00 AM to 6:00 PM.<br />
                            In winter it is open between 10:00 AM to 5:00 PM.
                        </p>
                    </div>
                </section>
            </main>
        </>
    );
}
