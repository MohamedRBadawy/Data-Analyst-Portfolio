import React from 'react';
import { HomeIcon, LightBulbIcon, BriefcaseIcon, CogIcon, UserIcon, MailIcon, ChartBarIcon, DocumentTextIcon, ToolkitIcon } from '../constants';

interface SidebarProps {
    scrollToSection: (section: 'home' | 'solutions' | 'toolkit' | 'cases' | 'industries' | 'about' | 'blog' | 'contact') => void;
}

const navItems = [
    { icon: <HomeIcon />, label: 'Home', section: 'home' as const },
    { icon: <LightBulbIcon />, label: 'Solutions', section: 'solutions' as const },
    { icon: <ToolkitIcon />, label: 'My Toolkit', section: 'toolkit' as const },
    { icon: <BriefcaseIcon />, label: 'Case Studies', section: 'cases' as const },
    { icon: <CogIcon />, label: 'Industries', section: 'industries' as const },
    { icon: <UserIcon />, label: 'About Me', section: 'about' as const },
    { icon: <DocumentTextIcon />, label: 'Blog', section: 'blog' as const },
    { icon: <MailIcon />, label: 'Contact', section: 'contact' as const },
];

const getAnimationClass = (section: string) => {
    switch (section) {
        case 'solutions':
            return 'group-hover:animate-icon-glow';
        case 'cases':
            return 'group-hover:animate-icon-bounce';
        case 'industries':
            return 'group-hover:animate-icon-rotate';
        default:
            return '';
    }
};

const Sidebar: React.FC<SidebarProps> = ({ scrollToSection }) => {
    return (
        <aside className="fixed top-0 left-0 h-full w-20 bg-brand-bg/80 backdrop-blur-sm border-r border-brand-border z-50 hidden lg:flex flex-col items-center justify-between py-6">
            <div className="flex flex-col items-center space-y-6">
                <div className="w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center font-poppins font-bold text-xl text-white">MB</div>
                <nav>
                    <ul className="space-y-4">
                        {navItems.map((item) => {
                             const iconWithAnimation = React.cloneElement(item.icon, { 
                                className: `w-6 h-6 transition-transform duration-300 ${getAnimationClass(item.section)}` 
                            });
                            return (
                                <li key={item.label} className="group relative">
                                    <button
                                        onClick={() => scrollToSection(item.section)}
                                        className="p-3 rounded-lg text-brand-text/60 hover:bg-brand-accent/20 hover:text-white transition-all duration-300"
                                        aria-label={item.label}
                                    >
                                        {iconWithAnimation}
                                    </button>
                                    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1 bg-brand-surface border border-brand-border rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                        {item.label}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
            <div className="group relative text-center">
                 <div className="p-3 rounded-lg text-brand-text/60 group-hover:text-white transition-all duration-300">
                    <ChartBarIcon />
                </div>
                <div className="absolute left-full bottom-0 ml-4 px-4 py-2 bg-brand-surface border border-brand-border rounded-md text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 text-left">
                    <p className="font-roboto-mono">K Line Europe: 2023-Now</p>
                    <p className="font-roboto-mono">Expack Shipping: 2018-22</p>
                    <p className="font-roboto-mono">Skills: Looker, G-Sheets</p>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;