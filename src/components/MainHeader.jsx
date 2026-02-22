import { Link } from 'react-router-dom';

export default function MainHeader() {
    return (
        <>
            {/* TOPBAR */}
            <div className="topbar">
                <div className="topbar__left">
                    <span className="topbar__item"><img src="/assets/icon/clock-plus-svgrepo-com 1.png" className="ico" alt="clock" /> The Museum
                        is Open Today from 10 AM to 5 PM</span>
                </div>
                <div className="topbar__right">
                    <span className="topbar__item"><img src="/assets/icon/location-pin-svgrepo-com 1.svg" className="ico" alt="location" /> F11/A
                        &amp; F11/B Sher-e-Bangla Nagar Civic Centre,
                        Agargaon, Dhaka</span>
                </div>
            </div>

            {/* HEADER */}
            <header className="header">
                <div className="header__inner">

                    {/* MOBILE TOP ROW */}
                    <div className="mbar">
                        {/* No mbar__donate here in subpages */}
                        <Link to="/" className="mbar__brand">
                            <img src="/assets/header logo.svg" alt="Logo" className="mbar__logo" />
                            <div className="mbar__text">
                                <div className="mbrand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                                <div className="mbrand__en">Liberation War Museum</div>
                            </div>
                        </Link>
                        <button className="mbar__burger" aria-label="Open menu">
                            <span></span><span></span><span></span>
                        </button>
                    </div>

                    {/* Desktop left brand - Different from HomeHeader */}
                    <div className="brand brand--desktop">
                        <Link to="/"><img src="/assets/header logo.svg" alt="Museum Logo" className="brand-logo" /></Link>
                        <div className="brand-text">
                            <Link to="/" style={{ textDecoration: 'none' }}>
                                <div className="brand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                                <div className="brand__en">Liberation War Museum</div>
                            </Link>
                        </div>
                    </div>

                    {/* No vlines here */}

                    {/* Desktop right nav */}
                    <div className="right right--desktop">
                        <div className="utility">
                            <a className="uitem" href="#"><img src="/assets/icon/user-plus-svgrepo-com 1.png" className="uico" alt="user" />
                                Membership</a>
                            <a className="uitem" href="#"><img src="/assets/icon/cart-shopping-svgrepo-com 1.png" className="uico" alt="shop" />
                                Shop</a>
                            <a className="uitem" href="#"><img src="/assets/icon/search-plus-svgrepo-com 1.png" className="uico" alt="search" />
                                Search</a>
                            <Link className="btn-donate" to="/donate">Donate</Link>
                        </div>

                        <nav className="nav">
                            <div className="nav-item">
                                <a href="#">About</a>
                                <ul className="submenu submenu--explore">
                                    <li><Link to="/museum-story">Museum Story</Link></li>
                                    <li><Link to="/accreditations-and-affiliations">Accreditations and Affiliations</Link></li>
                                    <li><Link to="/board-of-trustees">Board of Trustees</Link></li>
                                    <li><Link to="/annual-speeches">Annual Speeches</Link></li>
                                    <li><Link to="/publications">Publications</Link></li>
                                    <li><Link to="/projects-and-programs">Projects and Programs</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Explore</a>
                                <ul className="submenu submenu--explore">
                                    <li>
                                        <a href="#">Museum Gallery</a>
                                        <ul className="submenu-nested">
                                            <li><a href="#">Gallery 1: Heritage and Struggles</a></li>
                                            <li><a href="#">Gallery 2: Rights and Sacrifices</a></li>
                                            <li><a href="#">Gallery 3: Battles and Friends</a></li>
                                            <li><a href="#">Gallery 4: Victory and Values</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/virtual-tour">Virtual Tour</Link></li>
                                    <li>
                                        <a href="#">Facilities and Amenities</a>
                                        <ul className="submenu-nested">
                                            <li><a href="#">Library</a></li>
                                            <li><a href="#">Kiosk</a></li>
                                            <li><a href="#">Exhibition Gallery</a></li>
                                            <li><a href="#">Cafes</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Resources</a>
                                        <ul className="submenu-nested">
                                            <li><a href="#">Documents</a></li>
                                            <li><a href="#">Collection</a></li>
                                            <li><a href="#">Oral History</a></li>
                                            <li><a href="#">Audio Visual Archive</a></li>
                                            <li><a href="#">Photo Archive</a></li>
                                            <li><a href="#">Archive Donors</a></li>
                                            <li><a href="#">Audit Reports</a></li>
                                            <li><a href="#">Struggle of Bangladesh: Pictorial</a></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/on-this-day">On This Day</Link></li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Activities</a>
                                <ul className="submenu submenu--explore">
                                    <li>
                                        <a href="#">Events</a>
                                        <ul className="submenu-nested">
                                            <li><a href="#">Past</a></li>
                                            <li><a href="#">Upcoming</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Press Release</a></li>
                                    <li><a href="#">Oral History</a></li>
                                    <li><a href="#">Publication</a></li>
                                    <li>
                                        <a href="#">The Center for the Study of Genocide & Justice</a>
                                        <ul className="submenu-nested">
                                            <li><a href="#">Certificate Course</a></li>
                                            <li><a href="#">Volunteer at CSGJ</a></li>
                                            <li><a href="#">Winter School</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">RFQs</a></li>
                                    <li><a href="#">Annual Performance Report</a></li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Support</a>
                                <ul className="submenu submenu--explore">
                                    <li>
                                        <a href="#">Donation</a>
                                        <ul className="submenu-nested">
                                            <li><Link to="/donate">Make a Donation</Link></li>
                                            <li><a href="#">Object Donor List</a></li>
                                            <li><a href="#">All donors</a></li>
                                            <li><a href="#">Fund Collection Campaign – Leaflet, TVC</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Friends of Liberation War Museum Bangladesh</a></li>
                                </ul>
                            </div>
                            <div className="nav-item">
                                <a href="#">Visit</a>
                                <ul className="submenu submenu--explore">
                                    <li><a href="#">Ticket Information</a></li>
                                    <li><a href="#">Opening Hours</a></li>
                                    <li><a href="#">Maps and Directions</a></li>
                                    <li><a href="#">Photography and Filming</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>

                    {/* No center badge here */}

                    {/* MOBILE CENTER TITLE */}
                    <div className="mbrand">
                        <div className="mbrand__bn">মুক্তিযুদ্ধ জাদুঘর</div>
                        <div className="mbrand__en">Liberation War Museum</div>
                    </div>

                </div>

                {/* Mobile Navigation Menu - Enhanced for Consistency */}
                <div className="mobile-nav">
                    <div className="mobile-nav__links">
                        <Link to="/">Home</Link>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">About <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <Link to="/museum-story">Museum Story</Link>
                                <Link to="/accreditations-and-affiliations">Accreditations and Affiliations</Link>
                                <Link to="/board-of-trustees">Board of Trustees</Link>
                                <Link to="/annual-speeches">Annual Speeches</Link>
                                <Link to="/publications">Publications</Link>
                                <Link to="/projects-and-programs">Projects and Programs</Link>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Explore <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Museum Gallery <span
                                        className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <a href="#">Gallery 1: Heritage and Struggles</a>
                                        <a href="#">Gallery 2: Rights and Sacrifices</a>
                                        <a href="#">Gallery 3: Battles and Friends</a>
                                        <a href="#">Gallery 4: Victory and Values</a>
                                    </div>
                                </div>
                                <Link to="/virtual-tour">Virtual Tour</Link>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Facilities and Amenities <span
                                        className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <a href="#">Library</a>
                                        <a href="#">Kiosk</a>
                                        <a href="#">Exhibition Gallery</a>
                                        <a href="#">Cafes</a>
                                    </div>
                                </div>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Resources <span className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <a href="#">Documents</a>
                                        <a href="#">Collection</a>
                                        <a href="#">Oral History</a>
                                        <a href="#">Audio Visual Archive</a>
                                        <a href="#">Photo Archive</a>
                                        <a href="#">Archive Donors</a>
                                        <a href="#">Audit Reports</a>
                                        <a href="#">Struggle of Bangladesh: Pictorial</a>
                                    </div>
                                </div>
                                <Link to="/on-this-day">On This Day</Link>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Activities <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Events <span className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <a href="#">Past</a>
                                        <a href="#">Upcoming</a>
                                    </div>
                                </div>
                                <a href="#">Press Release</a>
                                <a href="#">Oral History</a>
                                <a href="#">International Conferences</a>
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">The Center for the Study of Genocide & Justice <span
                                        className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <a href="#">Seminar and Webinar</a>
                                        <a href="#">Research and Publications</a>
                                        <a href="#">Certificate Course</a>
                                        <a href="#">Voluntary Exchange Program</a>
                                        <a href="#">Volunteer at CSGJ</a>
                                        <a href="#">Winter School</a>
                                    </div>
                                </div>
                                <a href="#">RFQs</a>
                                <a href="#">Annual Performance Report</a>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Support <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <div className="mobile-accordion">
                                    <a href="#" className="mobile-accordion__toggle">Donation <span className="mobile-accordion__arrow">{'\u203A'}</span></a>
                                    <div className="mobile-accordion__panel">
                                        <Link to="/donate">Make a Donation</Link>
                                        <a href="#">Object Donor List</a>
                                        <a href="#">All donors</a>
                                        <a href="#">Fund Collection Campaign – Leaflet, TVC</a>
                                    </div>
                                </div>
                                <a href="#">Friends of Liberation War Museum Bangladesh</a>
                            </div>
                        </div>
                        <div className="mobile-submenu">
                            <a href="#" className="mobile-submenu__toggle">Visit <span className="mobile-submenu__arrow">{'\u203A'}</span></a>
                            <div className="mobile-submenu__content">
                                <a href="#">Ticket Information</a>
                                <a href="#">Opening Hours</a>
                                <a href="#">Maps and Directions</a>
                                <a href="#">Photography and Filming</a>
                            </div>
                        </div>
                    </div>

                    <Link className="btn-donate-mobile" to="/donate">Donate</Link>
                </div>

            </header>
        </>
    );
}
