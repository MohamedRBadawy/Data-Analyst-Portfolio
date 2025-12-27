import React, { useRef } from 'react';
import ScramblingHeading from './ScramblingHeading';
import { MailIcon, UsersIcon } from '../constants';
import { useInteraction } from '../context/InteractionContext';

interface TeamCollaborationProps {
    navigateToContact: () => void;
}

const TeamCollaboration: React.FC<TeamCollaborationProps> = ({ navigateToContact }) => {
    const { setIsHovering } = useInteraction();
    const panelRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!panelRef.current) return;
        const rect = panelRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        panelRef.current.style.setProperty('--x', `${x}px`);
        panelRef.current.style.setProperty('--y', `${y}px`);
    };

    return (
        <section className="py-16 lg:py-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Leadership & Collaborative Growth" />
                    <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl mx-auto">
                        True clarity is built together. My approach to leadership is centered on mentoring and empowering teams. We practice together, we build together, and we help each other grow, turning individual skills into collective strength.
                    </p>
                </div>

                <div
                    ref={panelRef}
                    onMouseMove={handleMouseMove}
                    className="holographic-panel rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden interactive-glow"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent animate-gradient-pan" />
                    <div className="text-brand-accent bg-brand-accent/10 p-4 rounded-full flex-shrink-0 z-10">
                        <UsersIcon className="w-12 h-12" />
                    </div>
                    <div className="flex-grow text-center md:text-left z-10">
                        <h3 className="font-poppins text-h3 text-glow-accent">The Query Initiative</h3>
                        <p className="text-brand-text-secondary mt-1">
                            "The Query" is our pro-bono initiative where my team and I help small to medium-sized businesses with small data tasks for free. It's our way of giving back, sharpening our skills, and making a tangible impact on emerging businesses.
                        </p>
                    </div>
                     <button
                        onClick={navigateToContact}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="btn btn-secondary !py-3 !px-6 whitespace-nowrap z-10"
                    >
                         <MailIcon className="w-5 h-5 mr-2" />
                        Request Help
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TeamCollaboration;