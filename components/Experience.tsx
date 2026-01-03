
import React from 'react';
import { experienceData } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

interface ExperienceProps {
    showExperiencePage: () => void;
}

const Experience: React.FC<ExperienceProps> = ({ showExperiencePage }) => {
    const { setIsHovering } = useInteraction();
    const latestExperience = experienceData[0]; // Show the most recent one

    // Helper to bold numbers/percentages in achievement text
    const renderAchievementWithBoldMetrics = (text: string) => {
        const parts = text.split(/(\d+%|\d+)/g);
        return parts.map((part, i) =>
            /\d+%?/.test(part) ? <strong key={i} className="text-brand-text-primary font-bold">{part}</strong> : part
        );
    };

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Professional Experience" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                        A snapshot of my most recent role, demonstrating my capabilities in data analysis, BI, and process automation.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto holographic-panel p-[var(--space-lg)] rounded-xl">
                    <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent">{latestExperience.company}</h3>
                    <p className="font-roboto-mono text-brand-text-secondary mb-2">{latestExperience.role}</p>
                    <p className="font-roboto-mono text-sm text-brand-text-secondary/70 mb-4">{latestExperience.dates}</p>
                    <p className="text-brand-text-secondary mb-6">{latestExperience.summary}</p>
                    <h4 className="font-poppins font-bold text-brand-text-primary mb-4">Key Achievements:</h4>
                    <ul className="space-y-3 mb-8">
                        {latestExperience.achievements.slice(0, 2).map((ach, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-brand-clarity mr-3 mt-1.5 text-xs">◆</span>
                                <span className="text-brand-text-secondary">{renderAchievementWithBoldMetrics(ach)}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={showExperiencePage}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-flex items-center px-6 py-3 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.15em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
                    >
                        View Full Experience
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Experience;

