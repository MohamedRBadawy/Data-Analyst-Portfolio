
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

    return (
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="Professional Experience" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                    A snapshot of my most recent role, demonstrating my capabilities in data analysis, BI, and process automation.
                </p>
            </div>
            <div className="max-w-4xl mx-auto holographic-panel p-8 rounded-xl">
                <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent">{latestExperience.company}</h3>
                <p className="font-roboto-mono text-brand-text-secondary mb-2">{latestExperience.role}</p>
                <p className="font-roboto-mono text-sm text-brand-text-secondary/70 mb-4">{latestExperience.dates}</p>
                <p className="text-brand-text-secondary mb-6">{latestExperience.summary}</p>
                <h4 className="font-poppins font-bold text-brand-text-primary mb-4">Key Achievements:</h4>
                <ul className="space-y-2 mb-8">
                    {latestExperience.achievements.slice(0, 2).map((ach, index) => (
                         <li key={index} className="flex items-start">
                             <span className="text-brand-clarity mr-3 mt-1.5 text-xs">◆</span>
                             <span className="text-brand-text-secondary">{ach}</span>
                         </li>
                    ))}
                </ul>
                <button
                    onClick={showExperiencePage}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="btn btn-secondary"
                >
                    View Full Experience
                </button>
            </div>
        </section>
    );
};

export default Experience;
