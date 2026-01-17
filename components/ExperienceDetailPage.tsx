import React from 'react';
import { WorkExperience, CaseStudy, caseStudies } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';
import SectionIndex from './SectionIndex';
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

    const hasCategories = experience.contributionCategories && experience.contributionCategories.length > 0;
    const categorySectionIds = hasCategories
        ? experience.contributionCategories!.map(cat => cat.id)
        : [];
    const sectionIds = hasCategories
        ? ['summary', 'measured-outcomes', ...categorySectionIds]
        : ['summary', 'key-contributions', 'zoho-expertise', 'related-projects'];

    return (
        <div className="min-h-screen py-0 px-4 sm:px-8 lg:px-16 animate-reveal-in">
            <SectionIndex sectionIds={sectionIds} />

            <div className="max-w-5xl mx-auto pt-8 sm:pt-12">
                <button
                    onClick={onBack}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="inline-flex items-center px-4 py-2 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-xs sm:text-sm font-roboto-mono font-bold uppercase tracking-[0.1em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] mb-8 group"
                >
                    <span className="mr-2 transition-transform duration-300 group-hover:-translate-x-1">&larr;</span>
                    Back to Work
                </button>

                <header className="text-center my-16">
                    <ScramblingHeading text={experience.company} />
                    <p className="font-poppins text-3xl text-brand-text-primary mt-6 font-semibold">{experience.role}</p>
                    <p className="font-roboto-mono text-brand-text-secondary mt-2 text-sm">{experience.dates}</p>
                </header>

                <article className="space-y-16">
                    <section id="summary" data-title="Summary" className="holographic-panel p-8 rounded-lg">
                        <p className="text-xl text-brand-text-primary leading-relaxed">{experience.summary}</p>
                    </section>

                    {hasCategories ? (
                        <>
                            <section id="measured-outcomes" data-title="Outcomes" className="holographic-panel p-8 rounded-lg border-l-4 border-brand-clarity">
                                <h4 className="font-bold font-poppins text-2xl text-brand-text-primary mb-6">Impact Summary</h4>
                                <ul className="space-y-4">
                                    {experience.achievements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className="w-6 h-6 text-brand-clarity mr-3 mt-0.5 flex-shrink-0" />
                                            <span className="text-brand-text-primary leading-relaxed text-lg">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {experience.contributionCategories!.map((category) => {
                                const titleMap: { [key: string]: string } = {
                                    'operational-intelligence': 'Dashboards',
                                    'workflow-automation': 'Automation',
                                    'internal-tools': 'Tools',
                                    'ai-prototypes': 'Prototypes',
                                    'enterprise-systems': 'Systems'
                                };
                                return (
                                    <section key={category.id} id={category.id} data-title={titleMap[category.id] || category.title}>
                                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6 text-center">{category.title}</h3>
                                        <p className="text-brand-text-primary/80 font-medium text-center mb-8 max-w-3xl mx-auto text-lg">{category.description}</p>
                                        <div className="space-y-4">
                                            {category.items.map((item, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => item.caseStudyId ? handleProjectClick(item.caseStudyId) : undefined}
                                                    onMouseEnter={() => item.caseStudyId ? setIsHovering(true) : undefined}
                                                    onMouseLeave={() => item.caseStudyId ? setIsHovering(false) : undefined}
                                                    className={`holographic-panel p-6 rounded-lg ${item.caseStudyId ? 'cursor-pointer group' : ''}`}
                                                >
                                                    <div className="flex items-start justify-between gap-4">
                                                        <div className="flex-grow">
                                                            <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-2">{item.title}</h4>
                                                            <p className="text-brand-text-primary/80 font-medium text-lg">{item.description}</p>
                                                        </div>
                                                        {item.caseStudyId && (
                                                            <button className="flex-shrink-0 px-4 py-2 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-xs uppercase font-roboto-mono font-bold tracking-[0.1em] text-brand-text-secondary group-hover:text-brand-text-primary group-hover:bg-brand-accent/10 transition-all duration-300">
                                                                View Case Study &rarr;
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {category.subSection && (
                                            <div className="mt-8 pt-8 border-t border-brand-border/10">
                                                <div className="text-center mb-6">
                                                    <h4 className="font-roboto-mono font-bold uppercase tracking-[0.05em] text-lg text-brand-text-primary mb-2">{category.subSection.title}</h4>
                                                    <p className="text-sm text-brand-text-secondary max-w-2xl mx-auto">{category.subSection.description}</p>
                                                </div>
                                                <ul className="space-y-3 max-w-3xl mx-auto">
                                                    {category.subSection.items.map((subItem, idx) => (
                                                        <li key={idx} className="flex items-start">
                                                            <span className="text-brand-text-secondary text-sm leading-relaxed">
                                                                <strong className="text-brand-text-primary font-medium">{subItem.title}:</strong> {subItem.description}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                {category.subSection.footer && (
                                                    <p className="text-center text-xs italic text-brand-text-secondary/60 mt-6 max-w-2xl mx-auto">
                                                        {category.subSection.footer}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </section>
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <section id="key-contributions" data-title="Impact">
                                <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-10 text-center">Key Contributions & Achievements</h3>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    <div className="holographic-panel p-8 rounded-lg border-l-4 border-brand-clarity">
                                        <h4 className="font-bold font-poppins text-2xl text-brand-text-primary mb-6">Measured Outcomes</h4>
                                        <ul className="space-y-4">
                                            {experience.achievements.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckIcon className="w-6 h-6 text-brand-clarity mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-brand-text-primary leading-relaxed text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="holographic-panel p-8 rounded-lg">
                                        <h4 className="font-bold font-poppins text-2xl text-brand-text-primary mb-6">Contributions</h4>
                                        <ul className="space-y-4">
                                            {experience.contributions.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-brand-accent mr-3 mt-1.5 text-xs">◆</span>
                                                    <span className="text-brand-text-primary/80 font-medium leading-relaxed text-lg">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {experience.zohoExpertise && experience.zohoExpertise.length > 0 && (
                                <section id="zoho-expertise" data-title="Zoho">
                                    <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-10 text-center">System Ownership: Zoho Infrastructure</h3>
                                    <div className="space-y-8">
                                        {experience.zohoExpertise.map((tool, index) => (
                                            <div key={index} className="holographic-panel p-8 rounded-lg flex items-start gap-6">
                                                <div className="flex-shrink-0 bg-brand-cta/10 p-4 rounded-full mt-1">
                                                    <WrenchIcon className="w-6 h-6 text-brand-cta" />
                                                </div>
                                                <div className="flex-grow">
                                                    <h4 className="font-poppins font-bold text-xl text-brand-cta mb-2">{tool.product}</h4>
                                                    <p className="text-brand-text-primary/80 font-medium leading-relaxed text-lg">{tool.usage}</p>
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
                                <section id="related-projects" data-title="Projects">
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
                                                {project.caseStudyId && (
                                                    <button className="px-4 py-2 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-xs uppercase font-roboto-mono font-bold tracking-[0.1em] text-brand-text-secondary group-hover:text-brand-text-primary group-hover:bg-brand-accent/10 transition-all duration-300">
                                                        View Case Study &rarr;
                                                    </button>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </>
                    )}
                </article>

                {experience.operatingContext && (
                    <section className="mt-16 py-8 border-t border-brand-border/20">
                        <h4 className="font-roboto-mono font-bold uppercase tracking-[0.05em] text-lg text-brand-text-primary mb-4 text-center">Operating Context</h4>
                        <p className="text-brand-text-primary/80 font-medium text-center max-w-4xl mx-auto text-lg leading-relaxed">
                            {experience.operatingContext}
                        </p>
                    </section>
                )}


            </div>
        </div>
    );
};

export default ExperienceDetailPage;
