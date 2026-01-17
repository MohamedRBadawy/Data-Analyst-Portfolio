
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
                <div className="text-center mb-20">
                    <ScramblingHeading text="Professional Experience" />
                    <p className="text-xl text-brand-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed">
                        A snapshot of my most recent role, demonstrating my capabilities in data analysis, BI, and process automation.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto holographic-panel p-8 rounded-lg border border-brand-border smooth-transition shadow-md hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden">
                    <h3 className="font-sans text-2xl font-bold text-brand-text-primary mb-3">{latestExperience.company}</h3>
                    <p className="font-mono text-brand-text-secondary mb-2 text-sm font-medium">{latestExperience.role}</p>
                    <p className="font-mono text-xs text-brand-text-secondary/70 mb-6">{latestExperience.dates}</p>
                    <p className="text-brand-text-secondary mb-8 text-sm leading-relaxed">{latestExperience.summary}</p>
                    <h4 className="font-sans font-bold text-brand-text-primary mb-5 text-base">Key Achievements:</h4>
                    <ul className="space-y-4 mb-12">
                        {latestExperience.achievements.slice(0, 2).map((ach, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-brand-clarity mr-3 mt-1.5 text-xs">◆</span>
                                <span className="text-brand-text-secondary text-sm">{renderAchievementWithBoldMetrics(ach)}</span>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={showExperiencePage}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-flex items-center px-6 py-2.5 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-md text-xs font-mono font-bold uppercase tracking-[0.1em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 smooth-transition shadow-md group hover:-translate-y-1 hover:shadow-lg"
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

