import React from 'react';
import { WorkExperience, CaseStudy, caseStudies } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, BriefcaseIcon, WrenchIcon } from '../constants';

interface ExperienceDetailPageProps {
    experience: WorkExperience;
    onBack: () => void;
    showProjectDetailPage: (study: CaseStudy) => void;
}

const ExperienceDetailPage: React.FC<ExperienceDetailPageProps> = ({ experience, onBack, showProjectDetailPage }) => {
    const { setIsHovering } = useInteraction();

    const handleProjectClick = (caseStudyId?: string) => {
        if (!caseStudyId) return;
        const project = caseStudies.find(cs => cs.id === caseStudyId);
        if (project) {
            showProjectDetailPage(project);
        }
    }

    return (
        <div className="min-h-screen py-16 sm:py-20 px-4 sm:px-8 lg:px-16 animate-reveal-in">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onBack}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="btn btn-secondary mb-8"
                >
                    &larr; Back to Work
                </button>

                <header className="text-center my-12">
                    <ScramblingHeading text={experience.company} />
                    <p className="font-poppins text-2xl text-brand-text-primary mt-4">{experience.role}</p>
                    <p className="font-roboto-mono text-brand-text-secondary">{experience.dates}</p>
                </header>

                <article className="space-y-16">
                    <section className="holographic-panel p-8 rounded-lg">
                        <p className="text-xl text-brand-text-primary leading-relaxed">{experience.summary}</p>
                    </section>

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Key Contributions & Achievements</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="holographic-panel p-6 rounded-lg">
                                <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-4">Contributions</h4>
                                <ul className="space-y-3">
                                    {experience.contributions.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                            <span className="text-brand-text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                             <div className="holographic-panel p-6 rounded-lg">
                                <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-4">Achievements</h4>
                                <ul className="space-y-3">
                                    {experience.achievements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-brand-clarity mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-brand-text-secondary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>
                    
                    {experience.zohoExpertise && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Zoho Suite Expertise</h3>
                            <div className="space-y-6">
                                {experience.zohoExpertise.map((tool, index) => (
                                    <div key={index} className="holographic-panel p-6 rounded-lg flex items-start gap-4">
                                        <div className="flex-shrink-0 bg-brand-cta/10 p-3 rounded-full mt-1">
                                            <WrenchIcon className="w-6 h-6 text-brand-cta" />
                                        </div>
                                        <div>
                                            <h4 className="font-poppins font-bold text-lg text-brand-cta">{tool.product}</h4>
                                            <p className="text-brand-text-secondary">{tool.usage}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Core Tools & Technologies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experience.tools.map((toolCategory, index) => (
                                <div key={index} className="holographic-panel p-6 rounded-lg">
                                    <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-4">{toolCategory.category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {toolCategory.items.map(item => (
                                            <span key={item} className={`px-3 py-1 text-sm rounded-full font-medium bg-brand-border text-brand-text-secondary`}>{item}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {experience.projects.length > 0 && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Related Projects</h3>
                            <div className="space-y-4">
                                {experience.projects.map((project, index) => (
                                    <div 
                                        key={index}
                                        onClick={() => handleProjectClick(project.caseStudyId)}
                                        onMouseEnter={() => setIsHovering(true)}
                                        onMouseLeave={() => setIsHovering(false)}
                                        className={`holographic-panel p-6 rounded-lg flex items-center group ${project.caseStudyId ? 'cursor-pointer' : 'cursor-default'}`}
                                    >
                                        <BriefcaseIcon className="w-6 h-6 text-brand-cta mr-4 flex-shrink-0" />
                                        <div className="flex-grow">
                                            <h4 className="font-bold font-poppins text-lg text-brand-text-primary">{project.title}</h4>
                                        </div>
                                        {project.caseStudyId && <button className="btn-tertiary text-sm">View Case Study &rarr;</button>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </article>
            </div>
        </div>
    );
};

export default ExperienceDetailPage;