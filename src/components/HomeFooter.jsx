import { Link } from 'react-router-dom';

export default function HomeFooter() {
    return (
        <footer className="main-footer">
            <div className="block footer-grid">
                {/* Quick Links */}
                <div className="footer-col">
                    <h3 className="footer-head">Quick Links</h3>
                    <ul className="footer-links-grid">
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/">Home</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Tickets</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">About</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/donate">Donate</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/virtual-tour">Virtual Tour</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Events</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <Link to="/on-this-day">On This Day</Link></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Gallery</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Trustees</a></li>
                        <li><img src="/assets/icon/double arrow.png" className="f-arrow" alt="" /> <a href="#">Contact</a></li>
                    </ul>
                </div>

                {/* Latest News */}
                <div className="footer-col">
                    <h3 className="footer-head">Latest News</h3>
                    <ul className="news-list">
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">Museum reached a record high in fiscal year 2023-24</a>
                        </li>
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">China to invest in museums in Bangladesh</a>
                        </li>
                        <li>
                            <img src="/assets/icon/double arrow.png" className="f-arrow" alt="" />
                            <a href="#">Liberation War Museum Expo in Bangladesh</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className="footer-col">
                    <h3 className="footer-head">Contact Us</h3>
                    <ul className="contact-list">
                        <li>
                            <img src="/assets/icon/location-pin-svgrepo-com 1.png" className="f-icon" alt="loc" />
                            <span>F11/A &amp; F11/B Sher-e Bangla Nagar <br /> Civic Centre, Agargaon, Dhaka</span>
                        </li>
                        <li>
                            <img src="/assets/icon/phone-svgrepo-com 1.png" className="f-icon" alt="phone" />
                            <span>02-48114991-3 <br /> 02-9142780</span>
                        </li>
                        <li>
                            <img src="/assets/icon/email-svgrepo-com 1.png" className="f-icon" alt="email" />
                            <span>info@liberationwarmuseumbd.org <br /> mukti.jadughar@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="block footer-bottom">
                <div className="copyright">© 2024 Liberation War Museum, All rights reserved</div>
                <div className="f-socials">
                    <a href="#"><img src="/assets/icon/logo-facebook.png" alt="FB" /></a>
                    <a href="#"><img src="/assets/icon/logo-linkedin.png" alt="LI" /></a>
                    <a href="#"><img src="/assets/icon/logo-twitter.png" alt="TW" /></a>
                    <a href="#"><img src="/assets/icon/logo-instagram.png" alt="IG" /></a>
                </div>
                <div className="powered">Powered by: Playmaker Ltd.</div>
            </div>
        </footer>
    );
}
