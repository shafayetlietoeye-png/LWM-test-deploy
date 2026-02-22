import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OnThisDay() {
    useEffect(() => {
        document.body.classList.add('page-on-this-day');
        return () => {
            document.body.classList.remove('page-on-this-day');
        };
    }, []);

    return (
        <>
            {/* HERO (On This Day Specific) */}
            <section className="hero hero--on-this-day">
                <div className="hero__inner hero__inner--bottom-left">
                    <div className="hero-card hero-card--dark-brush">
                        <div className="hero-card__title">On This Day</div>
                        <div className="hero-card__desc">
                            During the year of 1971 everyday was a story. A story of heroism, a story of sacrifice, a story of
                            suffering. Explore
                            through these stories on the basis of a chronological timeline of the days in wartime.
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTENT (Placeholder or Specific content if needed later) */}
            <main className="content content--otd">
                <section className="block block--otd">
                    <div className="separator"></div>
                    <div className="block__cap block__cap--center">
                        <span className="cap__title">ON THIS DAY</span>
                    </div>

                    <div className="otd-selector">
                        {/* Month Row */}
                        <div className="otd-months">
                            <button className="nav-arrow prev-month">{'\u2039'}</button>
                            <span className="month-item">February</span>
                            <span className="month-item active">March</span>
                            <span className="month-item">April</span>
                            <button className="nav-arrow next-month">{'\u203A'}</button>
                        </div>

                        {/* Date Row */}
                        <div className="otd-days">
                            <button className="nav-arrow prev-day">{'\u2039'}</button>
                            <span className="day-item">26th</span>
                            <span className="day-item">27th</span>
                            <span className="day-item active">28th</span>
                            <span className="day-item">29th</span>
                            <span className="day-item">30th</span>
                            <button className="nav-arrow next-day">{'\u203A'}</button>
                        </div>
                    </div>

                    <div className="otd-events">
                        <ul className="event-list-bullets">
                            <li>The curfew is loosened in Dhaka City from 7:00am in the morning to 4:00pm in the evening.</li>
                            <li>Later that night help is sought from the people of the world via the "Shwadhin Bangla Biplobi
                                Betar Kendro" from Chittagong</li>
                            <li>Pakistan Navy fired shots in the port city in various areas. And in the port area, the Pakistan
                                Navy disarms the Bangladeshi Navy men and murdered them</li>
                            <li>On the other side of Dhaka, from Jinjira, freedom fighters and Pak Bahini exchange gunfire.
                                Almost 3/4th of the country remains in control of the freedom</li>
                        </ul>
                    </div>

                    <div className="action-center">
                        <a className="btn-dark-grunge" href="#">Try a New Day</a>
                    </div>
                </section>
            </main>
        </>
    );
}
