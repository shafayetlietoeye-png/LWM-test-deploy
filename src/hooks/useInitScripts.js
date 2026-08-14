import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function useInitScripts() {
    const location = useLocation();

    useEffect(() => {
        // --- Gallery Slider ---
        const galleryRow = document.querySelector('.gallery-row');
        const galleryCleanup = [];

        if (galleryRow) {
            const prevBtn = galleryRow.querySelector('.arrow[aria-label="previous"]');
            const nextBtn = galleryRow.querySelector('.arrow[aria-label="next"]');
            const track = galleryRow.querySelector('.gallery-imgs');

            if (prevBtn && nextBtn && track) {
                const handleNext = () => {
                    const itemWidth = track.firstElementChild ? track.firstElementChild.clientWidth : 300;
                    track.scrollBy({ left: itemWidth + 20, behavior: 'smooth' });
                };
                const handlePrev = () => {
                    const itemWidth = track.firstElementChild ? track.firstElementChild.clientWidth : 300;
                    track.scrollBy({ left: -(itemWidth + 20), behavior: 'smooth' });
                };

                nextBtn.addEventListener('click', handleNext);
                prevBtn.addEventListener('click', handlePrev);

                galleryCleanup.push(() => {
                    nextBtn.removeEventListener('click', handleNext);
                    prevBtn.removeEventListener('click', handlePrev);
                });
            }
        }

        // --- Events Slider ---
        const eventsWrap = document.querySelector('.events-wrap');
        if (eventsWrap) {
            const ePrev = eventsWrap.querySelector('.event-prev');
            const eNext = eventsWrap.querySelector('.event-next');
            const eTrack = eventsWrap.querySelector('.events-slider');

            if (ePrev && eNext && eTrack) {
                const handleNext = () => {
                    const w = eTrack.firstElementChild ? eTrack.firstElementChild.clientWidth : 250;
                    eTrack.scrollBy({ left: w + 15, behavior: 'smooth' });
                };
                const handlePrev = () => {
                    const w = eTrack.firstElementChild ? eTrack.firstElementChild.clientWidth : 250;
                    eTrack.scrollBy({ left: -(w + 15), behavior: 'smooth' });
                };

                eNext.addEventListener('click', handleNext);
                ePrev.addEventListener('click', handlePrev);

                galleryCleanup.push(() => {
                    eNext.removeEventListener('click', handleNext);
                    ePrev.removeEventListener('click', handlePrev);
                });
            }
        }

        // --- Mobile Menu Toggle ---
        const burger = document.querySelector('.mbar__burger');
        const mobileNav = document.querySelector('.mobile-nav');

        if (burger && mobileNav) {
            const handleBurgerClick = (e) => {
                e.stopPropagation();
                const header = document.querySelector('.header');
                mobileNav.classList.toggle('active');
                burger.classList.toggle('open');
                if (header) header.classList.toggle('menu-open');

                if (mobileNav.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = '';
                }
            };

            burger.addEventListener('click', handleBurgerClick);
            galleryCleanup.push(() => burger.removeEventListener('click', handleBurgerClick));

            // Close menu when clicking links
            const links = mobileNav.querySelectorAll('a');
            const handleLinkClick = (e) => {
                if (e.target.classList.contains('mobile-submenu__toggle') ||
                    e.target.classList.contains('mobile-accordion__toggle')) {
                    return;
                }
                mobileNav.classList.remove('active');
                burger.classList.remove('open');
                document.body.style.overflow = '';
                const header = document.querySelector('.header');
                if (header) header.classList.remove('menu-open');
            };

            links.forEach(link => {
                link.addEventListener('click', handleLinkClick);
                galleryCleanup.push(() => link.removeEventListener('click', handleLinkClick));
            });
        }

        // --- Sticky Header ---
        const header = document.querySelector('.header');
        if (header) {
            let stickyTimeout = null;
            const handleScroll = () => {
                const scrollThreshold = 140;
                if (window.scrollY > scrollThreshold) {
                    if (!header.classList.contains('is-sticky')) {
                        header.classList.add('is-sticky');
                        document.body.classList.add('header-is-sticky');
                        requestAnimationFrame(() => {
                            requestAnimationFrame(() => {
                                header.classList.add('is-active');
                            });
                        });
                    }
                    if (stickyTimeout) {
                        clearTimeout(stickyTimeout);
                        stickyTimeout = null;
                    }
                } else {
                    if (header.classList.contains('is-sticky')) {
                        header.classList.remove('is-active');
                        header.classList.remove('is-sticky');
                        document.body.classList.remove('header-is-sticky');
                    }
                    if (stickyTimeout) {
                        clearTimeout(stickyTimeout);
                        stickyTimeout = null;
                    }
                }
            };

            window.addEventListener('scroll', handleScroll);
            galleryCleanup.push(() => window.removeEventListener('scroll', handleScroll));
        }

        // --- Flyout Submenu Auto-flip ---
        const subItems = document.querySelectorAll('.submenu > li');
        subItems.forEach(li => {
            const nested = li.querySelector('.submenu-nested');
            if (!nested) return;

            const handleEnter = () => {
                nested.style.left = '';
                nested.style.right = '';
                requestAnimationFrame(() => {
                    const rect = nested.getBoundingClientRect();
                    if (rect.right > window.innerWidth) {
                        nested.style.left = 'auto';
                        nested.style.right = '100%';
                        nested.style.marginLeft = '0';
                        nested.style.marginRight = '10px';
                    }
                });
            };
            const handleLeave = () => {
                nested.style.left = '';
                nested.style.right = '';
            };

            li.addEventListener('mouseenter', handleEnter);
            li.addEventListener('mouseleave', handleLeave);
            galleryCleanup.push(() => {
                li.removeEventListener('mouseenter', handleEnter);
                li.removeEventListener('mouseleave', handleLeave);
            });
        });

        // --- Main Submenu Auto-flip ---
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            const submenu = item.querySelector('.submenu');
            if (!submenu) return;

            const handleEnter = () => {
                submenu.style.left = '';
                submenu.style.right = '';
                requestAnimationFrame(() => {
                    const rect = submenu.getBoundingClientRect();
                    const overflow = rect.right - window.innerWidth;
                    if (overflow > 0) {
                        const newLeft = -20 - overflow - 20;
                        submenu.style.left = `${newLeft}px`;
                        submenu.style.right = 'auto';
                    }
                });
            };

            item.addEventListener('mouseenter', handleEnter);
            galleryCleanup.push(() => item.removeEventListener('mouseenter', handleEnter));
        });

        // --- Mobile Submenu Toggle ---
        const mobileSubToggles = document.querySelectorAll('.mobile-submenu__toggle');
        const handleSubToggle = (e) => {
            e.preventDefault();
            const currentSubmenu = e.target.closest('.mobile-submenu');
            const parent = currentSubmenu.parentElement;
            parent.querySelectorAll('.mobile-submenu.open').forEach(openSub => {
                if (openSub !== currentSubmenu) openSub.classList.remove('open');
            });
            currentSubmenu.classList.toggle('open');
        };
        mobileSubToggles.forEach(toggle => {
            toggle.addEventListener('click', handleSubToggle);
            galleryCleanup.push(() => toggle.removeEventListener('click', handleSubToggle));
        });

        // --- Mobile Accordion Toggle ---
        const mobileAccToggles = document.querySelectorAll('.mobile-accordion__toggle');
        const handleAccToggle = (e) => {
            e.preventDefault();
            const currentAccordion = e.target.closest('.mobile-accordion');
            const parent = currentAccordion.parentElement;
            parent.querySelectorAll('.mobile-accordion.open').forEach(openAcc => {
                if (openAcc !== currentAccordion) openAcc.classList.remove('open');
            });
            currentAccordion.classList.toggle('open');
        };
        mobileAccToggles.forEach(toggle => {
            toggle.addEventListener('click', handleAccToggle);
            galleryCleanup.push(() => toggle.removeEventListener('click', handleAccToggle));
        });

        // --- Prevent Default on Nav Items ---
        const navLinks = document.querySelectorAll('.nav-item > a');
        const handleNavClick = (e) => e.preventDefault();
        navLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
            link.style.cursor = 'default';
            galleryCleanup.push(() => link.removeEventListener('click', handleNavClick));
        });

        // Prevent default on nested flyout parents
        const flyoutLinks = document.querySelectorAll('.submenu > li:has(.submenu-nested) > a');
        flyoutLinks.forEach(link => {
            link.addEventListener('click', handleNavClick);
            link.style.cursor = 'default';
            galleryCleanup.push(() => link.removeEventListener('click', handleNavClick));
        });

        return () => {
            galleryCleanup.forEach(cleanup => cleanup());
            // Cleanup body classes if component unmounts
            document.body.classList.remove('header-is-sticky');
            document.body.style.overflow = '';
        };
    }, [location.pathname]); // Re-run on route change to re-attach listeners to new DOM
}
