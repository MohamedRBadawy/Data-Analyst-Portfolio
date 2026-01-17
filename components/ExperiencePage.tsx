import React from 'react';
import { experienceData, WorkExperience } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';

interface ExperiencePageProps {
    showMainPage: () => void;
    showDetailPage: (experience: WorkExperience) => void;
    hideHero?: boolean;
}

const ExperienceCard: React.FC<{ experience: WorkExperience; onViewDetails: () => void; }> = ({ experience, onViewDetails }) => {
    const { setIsHovering } = useInteraction();
    return (
        <div
            onClick={onViewDetails}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group holographic-panel rounded-lg p-6 flex flex-col cursor-pointer hover:bg-brand-surface/30 transition-all duration-300 relative border border-transparent hover:border-brand-accent/20"
        >
            <div className="flex-grow">
                {/* Visual Timeline Connector - Left Border or Dot logic could go here, keeping it clean for now */}

                <h3 className="font-poppins text-3xl font-bold text-brand-text-primary mb-3 group-hover:text-brand-accent transition-colors">{experience.company}</h3>
                <div className="flex flex-row items-baseline gap-2 mb-5">
                    <p className="font-sans text-lg font-semibold text-brand-text-secondary uppercase tracking-widest">{experience.role}</p>
                    <span className="text-brand-text-secondary/50 text-base">•</span>
                    <p className="font-sans text-base font-medium text-brand-text-secondary/70 uppercase tracking-wide">{experience.dates}</p>
                </div>

                <p className="text-xl text-brand-text-primary leading-relaxed mb-8 w-full">{experience.summary}</p>
            </div>

            <div className="inline-flex items-center text-sm uppercase font-sans font-bold tracking-[0.15em] text-brand-text-secondary/60 group-hover:text-brand-accent transition-all duration-300 self-start mt-auto pt-5 border-t border-brand-border/20 w-full">
                View Deep Dive <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </div>
        </div>
    );
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ showDetailPage, hideHero = false }) => {
    return (
        <section className={`min-h-screen ${hideHero ? 'pt-0' : 'pt-16'}`}>
            <div className="max-w-5xl mx-auto">
                {!hideHero && (
                    <div className="text-center mb-16">
                        <ScramblingHeading text="Work Experience" />
                        <p className="text-2xl text-brand-text-secondary mt-6 max-w-4xl mx-auto leading-relaxed">
                            A detailed look at my professional journey, key responsibilities, and the impact I've made in each role.
                        </p>
                    </div>
                )}

                <div className="space-y-3">
                    {experienceData.map(exp => (
                        <ExperienceCard key={exp.id} experience={exp} onViewDetails={() => showDetailPage(exp)} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperiencePage;
