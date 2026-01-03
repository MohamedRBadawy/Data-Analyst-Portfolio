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
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-20 bg-brand-surface/80 backdrop-blur-md border-t border-brand-border z-50">
            <ul className="flex justify-around items-center h-full px-2">
                {navItems.map(item => {
                    const isActive = activePage === item.id;
                    return (
                        <li key={item.id} className="flex-1 text-center">
                            <button
                                onClick={() => navigateTo(item.id)}
                                className={`flex flex-col items-center justify-center group transition-colors duration-300 w-full p-2 rounded-md ${isActive ? 'text-brand-accent' : 'text-brand-text-secondary'}`}
                                aria-label={item.text}
                            >
                                <span className="w-7 h-7 flex items-center justify-center">
                                    {item.icon}
                                </span>
                                <span className="text-xs font-medium mt-1">{item.text}</span>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default BottomNavBar;

