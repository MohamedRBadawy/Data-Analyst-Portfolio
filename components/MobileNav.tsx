import React, { useState } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, LightBulbIcon, ToolkitIcon, MailIcon } from '../constants';
import { Page } from '../App';

interface MobileNavProps {
    navigateTo: (page: Page) => void;
}

const navItems: { id: Page, text: string, icon: React.ReactElement }[] = [
    { id: 'home', text: 'Home', icon: <HomeIcon /> },
    { id: 'work', text: 'Work', icon: <BriefcaseIcon /> },
    { id: 'about', text: 'About', icon: <UserIcon /> },
    { id: 'services', text: 'Services', icon: <LightBulbIcon /> },
    { id: 'toolkit', text: 'Toolkit', icon: <ToolkitIcon /> },
    { id: 'contact', text: 'Contact', icon: <MailIcon /> },
];

const MobileNav: React.FC<MobileNavProps> = ({ navigateTo }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (page: Page) => {
        navigateTo(page);
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300"
                aria-label="Toggle navigation"
            >
                <div className={`transition-all duration-300 transform ${isOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                     <svg className="w-8 h-8 text-brand-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </div>
                <div className={`absolute transition-all duration-300 transform ${isOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
                     <svg className="w-8 h-8 text-brand-bg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12" />
                    </svg>
                </div>
            </button>
            
            <div 
                className={`fixed inset-0 bg-brand-bg/90 backdrop-blur-md z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            >
                <nav className="flex flex-col items-center justify-center h-full">
                    <ul className="text-center">
                        {navItems.map((item, index) => (
                            <li 
                                key={item.id} 
                                className="mb-6"
                            >
                                <button
                                    onClick={() => handleLinkClick(item.id)}
                                    className={`flex items-center text-2xl font-poppins font-bold transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 50}ms` }}
                                >
                                    <span className="mr-4">{item.icon}</span>
                                    {item.text}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default MobileNav;