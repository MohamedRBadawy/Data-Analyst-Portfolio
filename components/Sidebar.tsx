import React, { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, BriefcaseIcon, LightBulbIcon, CogIcon, MailIcon, MoonIcon, SunIcon } from '../constants';
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
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark-mode');
        } else {
            // Default to light mode if not set
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <aside className="hidden lg:block w-[var(--sidebar-width)] fixed top-0 left-4 h-screen p-8 border border-gray-200/50 bg-white backdrop-blur-md shadow-lg dark:border-transparent dark:bg-transparent dark:backdrop-blur-0 dark:shadow-none z-50 transition-all duration-300">
            <div className="flex flex-col h-full">
                {/* Header Section */}
                <div className="mb-12">
                    <h1 className="font-sans text-2xl font-bold text-ops-text-primary tracking-tight mb-2">Clarity Dash</h1>
                    <p className="font-mono text-base text-ops-text-tertiary font-medium uppercase tracking-wider">Mohamed Badawy</p>
                    <div className="mt-4 h-px w-full bg-ops-border/20 dark:bg-gradient-to-r dark:from-ops-border dark:via-ops-border/50 dark:to-transparent"></div>
                </div>

                {/* Navigation Section */}
                <nav className="flex-1 overflow-y-auto section-nav-scroll pr-2">
                    <ul className="space-y-2">
                        {navItems.map(item => {
                            const isActive = activePage === item.id;
                            return (
                                <li key={item.id}>
                                    <button
                                        onClick={() => navigateTo(item.id)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className={`w-full flex items-center px-4 py-3 rounded-lg border smooth-transition group relative overflow-hidden ${isActive
                                            ? 'bg-gradient-to-r from-signal-info/15 to-signal-info/5 border-signal-info/40 text-ops-text-primary shadow-md glow-pulse dark:from-signal-info/20 dark:to-signal-info/10'
                                            : 'border-ops-border/10 text-ops-text-secondary hover:bg-ops-border/5 hover:text-ops-text-primary hover:border-ops-border/30 dark:border-ops-border/40 dark:hover:bg-ops-surface/70 dark:hover:border-ops-border/60'
                                            }`}
                                    >
                                        <span className={`w-5 h-5 flex items-center justify-center mr-3 transition-all duration-300 ${isActive ? 'text-signal-info scale-110' : 'text-ops-text-tertiary group-hover:text-signal-info group-hover:scale-110'
                                            }`}>
                                            {item.icon}
                                        </span>
                                        <span className={`font-sans font-medium text-base tracking-wide transition-all duration-300 ${isActive ? 'translate-x-1' : ''}`}>{item.text}</span>
                                        {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-signal-info shadow-[0_0_8px_rgba(2,132,199,0.8)]"></div>}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-ops-border/20 dark:border-gradient-to-r dark:from-ops-border dark:via-ops-border/50 dark:to-transparent dark:border-opacity-40">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-ops-border text-ops-text-secondary hover:bg-ops-surface hover:text-ops-text-primary transition-all duration-100 mb-6 font-semibold"
                    >
                        {isDarkMode ? (
                            <>
                                <SunIcon className="w-4 h-4 " />
                                <span className="text-sm font-mono">LIGHT MODE</span>
                            </>
                        ) : (
                            <>
                                <MoonIcon className="w-4 h-4" />
                                <span className="text-sm font-mono">DARK MODE</span>
                            </>
                        )}
                    </button>

                    <div className="flex items-center justify-between px-2 mb-4">
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></span>
                            <span className="text-sm font-mono font-bold text-ops-text-secondary tracking-widest uppercase">SYSTEM ONLINE</span>
                        </div>
                        <span className="text-sm font-mono text-ops-text-tertiary font-medium">V2.6.0</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
