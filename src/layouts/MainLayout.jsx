import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from '../components/MainHeader';
import MainFooter from '../components/MainFooter';
import useInitScripts from '../hooks/useInitScripts';

export default function MainLayout() {
    useInitScripts();

    useEffect(() => {
        // Add page-subpage class
        document.body.classList.add('page-subpage');
        // Remove inline styles if any
        document.body.removeAttribute('style');

        return () => {
            document.body.classList.remove('page-subpage');
        };
    }, []);

    return (
        <>
            <MainHeader />
            <Outlet />
            <MainFooter />
        </>
    );
}
