import React from 'react';
import { experienceData, WorkExperience } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';

interface ExperiencePageProps {
    showMainPage: () => void;
    showDetailPage: (experience: WorkExperience) => void;
}

const ExperienceCard: React.FC<{ experience: WorkExperience; onViewDetails: () => void; }> = ({ experience, onViewDetails }) => {
    const { setIsHovering } = useInteraction();
    return (
        <div 
            onClick={onViewDetails}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="holographic-panel rounded-xl p-8 flex flex-col cursor-pointer"
        >
            <div className="flex-grow">
                <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent">{experience.company}</h3>
                <p className="font-roboto-mono text-brand-text-secondary mb-2">{experience.role}</p>
                <p className="font-roboto-mono text-sm text-brand-text-secondary/70 mb-4">{experience.dates}</p>
                <p className="text-brand-text-secondary">{experience.summary}</p>
            </div>
            <div className="btn-tertiary mt-8 self-start">
                View Details &rarr;
            </div>
        </div>
    );
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ showDetailPage }) => {
    return (
        <div className="min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <ScramblingHeading text="Work Experience" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">
                        A detailed look at my professional journey, key responsibilities, and the impact I've made in each role.
                    </p>
                </div>

                <div className="space-y-12">
                    {experienceData.map(exp => (
                        <ExperienceCard key={exp.id} experience={exp} onViewDetails={() => showDetailPage(exp)} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperiencePage;