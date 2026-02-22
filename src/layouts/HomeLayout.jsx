import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter';
import useInitScripts from '../hooks/useInitScripts';

export default function HomeLayout() {
    useInitScripts();

    useEffect(() => {
        // Clear any specific body classes from subpages
        document.body.className = '';
        // Also remove inline styles if any (from donate page)
        document.body.removeAttribute('style');
    }, []);

    return (
        <>
            <HomeHeader />
            <Outlet />
            <HomeFooter />
        </>
    );
}
