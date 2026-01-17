import React from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, LightBulbIcon, CogIcon, MailIcon } from '../constants';
import { Page } from '../App';

interface BottomNavBarProps {
    navigateTo: (page: Page) => void;
    activePage: Page;
}

const navItems: { id: Page, text: string, icon: React.ReactElement }[] = [
    { id: 'home', text: 'Home', icon: <HomeIcon /> },
    { id: 'work', text: 'Work', icon: <BriefcaseIcon /> },
    { id: 'about', text: 'About', icon: <UserIcon /> },
    { id: 'services', text: 'Services', icon: <LightBulbIcon /> },
    { id: 'process', text: 'Process', icon: <CogIcon /> },
    { id: 'contact', text: 'Contact', icon: <MailIcon /> },
];

const BottomNavBar: React.FC<BottomNavBarProps> = ({ navigateTo, activePage }) => {
    // Hide nav on detail pages for a more focused content view on small screens.
    const isDetailPage = ['projectDetail', 'serviceDetail', 'experienceDetail'].includes(activePage);
    if (isDetailPage) {
        return null;
    }

    return (
        <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in-up">
            <ul className="flex items-center px-4 py-2 bg-ops-surface/80 backdrop-blur-xl border border-ops-border/50 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] gap-1">
                {navItems.map(item => {
                    const isActive = activePage === item.id;
                    return (
                        <li key={item.id}>
                            <button
                                onClick={() => navigateTo(item.id)}
                                className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${isActive ? 'text-signal-info bg-signal-info/10' : 'text-ops-text-secondary hover:text-ops-text-primary hover:bg-ops-surface'}`}
                                aria-label={item.text}
                            >
                                <span className="w-5 h-5 flex items-center justify-center">
                                    {item.icon}
                                </span>
                                {isActive && (
                                    <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-signal-info"></span>
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomNavBar;

