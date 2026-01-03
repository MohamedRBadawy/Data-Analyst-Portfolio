import React from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, LightBulbIcon, CogIcon, MailIcon } from '../constants';
import { useInteraction } from '../context/InteractionContext';
import { Page } from '../App';

interface SidebarProps {
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

const Sidebar: React.FC<SidebarProps> = ({ navigateTo, activePage }) => {
    const { setIsHovering } = useInteraction();

    return (
        <aside className="hidden lg:block w-64 fixed top-0 left-0 h-screen p-[var(--space-lg)] border-r border-brand-border/50">
            <div className="flex flex-col h-full">
                <div className="mb-[var(--space-2xl)]">
                    <h1 className="font-poppins text-2xl font-bold text-brand-accent text-glow-accent">Clarity Dash</h1>
                    <p className="font-roboto-mono text-sm text-brand-text-secondary">Mohamed Badawy</p>
                </div>
                <nav>
                    <ul>
                        {navItems.map(item => {
                            const isActive = activePage === item.id;
                            return (
                                <li key={item.id} className="mb-[var(--space-sm)]">
                                    <button
                                        onClick={() => navigateTo(item.id)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className={`flex items-center group transition-colors duration-300 w-full text-left ${isActive ? 'text-white' : 'text-brand-text-secondary hover:text-white'}`}
                                    >
                                        <span className={`w-8 h-8 flex items-center justify-center mr-3 rounded-md transition-all duration-300 ${isActive ? 'bg-brand-accent text-brand-bg' : 'bg-brand-surface group-hover:bg-brand-accent group-hover:text-brand-bg'}`}>
                                            {item.icon}
                                        </span>
                                        <span className="font-poppins font-medium">{item.text}</span>
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className="mt-auto text-center text-xs text-brand-text-secondary/50">
                    © {new Date().getFullYear()} Clarity Dash.
                    <br />
                    Built with React & Tailwind.
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
