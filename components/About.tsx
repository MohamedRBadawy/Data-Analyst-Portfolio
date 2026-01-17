import React, { useState } from 'react';
import { milestones, aboutData } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';
import { CheckIcon, CodeIcon, CogIcon, HomeIcon, UserIcon } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const categoryIcons: { [key: string]: React.ReactElement } = {
    "Data & BI Tools": <HomeIcon />,
    "Automation & Systems": <CogIcon />,
    "Business & Soft Skills": <UserIcon />,
    "Languages": <CheckIcon />,
};


const About: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div
                            className="relative w-32 h-32 mx-auto mb-6 group"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <img
                                src={aboutData.image}
                                alt={aboutData.name}
                                className="w-full h-full rounded-full border-4 border-brand-accent shadow-lg transition-all duration-300 group-hover:scale-102 group-hover:shadow-[0_0_15px_theme(colors.brand.accent)]"
                            />
                        </div>
                        <ScramblingHeading text={`About ${aboutData.name}`} />
                        <p className="font-mono text-brand-text-secondary mt-4 animate-glow-clarity text-sm">{aboutData.tagline}</p>
                        <p className="text-base text-brand-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed">{aboutData.summary}</p>
                    </div>

                    <div className="mb-20">
                        {/* Authority Statement - NEW */}
                        <div className="holographic-panel p-7 rounded-lg border border-brand-accent/40 mb-16 bg-brand-surface/50 smooth-transition shadow-md hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                            <h3 className="font-sans text-xl font-bold text-brand-text-primary mb-4">Why I'm Uniquely Qualified</h3>
                            <p className="text-sm text-brand-text-primary leading-relaxed mb-6">
                                I'm not just a developer—I'm a former logistics founder who lived the chaos. I built Expack Shipping from the ground up, scaling it to 94% on-time delivery by automating the very problems you're facing today.
                            </p>
                            <p className="text-brand-text-secondary leading-relaxed text-xs">
                                Most consultants know the tools but don't understand the business stakes. I know exactly what it costs when a shipment is lost, a quote is late, or a report is wrong. I build systems that solve business problems, not just technical ones.
                            </p>
                        </div>

                        <h3 className="text-center font-sans text-xl font-bold mb-8 text-brand-text-primary">My Clarity Philosophy</h3>
                        <div className="holographic-panel p-7 rounded-lg smooth-transition shadow-md border border-brand-border hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                            <ul className="space-y-4 text-left max-w-3xl mx-auto">
                                <li className="flex items-start">
                                    <span className="text-brand-text-primary font-bold mr-3 mt-1 text-lg">01.</span>
                                    <p className="text-brand-text-primary text-sm"><strong>Clarity First, Code Second.</strong> I never build a dashboard until I understand the decision it needs to drive.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-text-primary font-bold mr-3 mt-1 text-lg">02.</span>
                                    <p className="text-brand-text-primary text-sm"><strong>Automation Should Be Invisible.</strong> The best systems work in the background, letting your team focus on high-value work.</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-brand-text-primary font-bold mr-3 mt-1 text-lg">03.</span>
                                    <p className="text-brand-text-primary text-sm"><strong>Data Must Be Actionable.</strong> If a report doesn't change what you do next, it's noise. I delete noise.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h3 className="text-center font-sans text-xl font-bold mb-8 text-brand-text-primary">How I Think About Systems</h3>
                        <div className="holographic-panel p-8 rounded-lg smooth-transition shadow-md border border-brand-border hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                            <RevealOnScroll direction="up" delay={0} className="max-w-3xl mx-auto space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                        <span className="text-brand-accent font-bold text-lg">1</span>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-brand-text-primary text-base mb-2">Systems Before Software</h4>
                                        <p className="text-brand-text-secondary text-sm">Bad process automated is bad process faster. I never build a tool until the process is clear.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                        <span className="text-brand-accent font-bold text-lg">2</span>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-brand-text-primary text-base mb-2">Visibility Before Optimization</h4>
                                        <p className="text-brand-text-secondary text-sm">You can't fix what you can't see. Dashboards come first, then process improvements.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                        <span className="text-brand-accent font-bold text-lg">3</span>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-brand-text-primary text-base mb-2">Control Before Scale</h4>
                                        <p className="text-brand-text-secondary text-sm">Manual chaos doesn't become automated clarity. Fix the workflow, then scale it.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                                        <span className="text-brand-accent font-bold text-lg">4</span>
                                    </div>
                                    <div>
                                        <h4 className="font-sans font-bold text-brand-text-primary text-base mb-2">Remove Humans from Unnecessary Decisions</h4>
                                        <p className="text-brand-text-secondary">Automation should eliminate manual decision points, not just speed them up.</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        </div>
                    </div>



                    <div className="holographic-panel rounded-lg p-8 mb-20 smooth-transition shadow-md border border-brand-border hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                        <h3 className="text-center font-sans text-2xl font-bold mb-8 text-brand-text-primary">My Core Competencies</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Object.entries(aboutData.skills).map(([category, skillsList]) => (
                                <div key={category} className="bg-brand-bg/70 p-7 rounded-lg border border-brand-border/50 smooth-transition hover:border-brand-border hover:shadow-md hover:-translate-y-1 group relative overflow-hidden">
                                    <h4 className="font-sans font-bold text-brand-text-primary mb-4 text-lg">{category}</h4>
                                    <ul className="space-y-2.5">
                                        {skillsList.map((skill, index) => (
                                            <li key={index} className="text-brand-text-primary flex items-start text-sm">
                                                <span className="text-brand-accent mr-3 mt-1 text-xs">◆</span>
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h3 className="text-center font-sans text-2xl font-bold mb-16 text-brand-text-primary">My Journey to Clarity</h3>

                    {/* Mobile Timeline (Vertical) */}
                    <div className="block md:hidden space-y-8 pl-4 border-l-2 border-brand-border ml-4">
                        {milestones.map(milestone => (
                            <div key={milestone.year} className="relative pl-6">
                                <div className="absolute -left-[25px] top-0 w-4 h-4 bg-brand-bg border-2 border-brand-accent rounded-full"></div>
                                <span className="font-mono text-brand-accent font-bold mb-2 block text-sm">{milestone.year}</span>
                                <h4 className="font-sans font-bold text-brand-text-primary text-base">{milestone.title}</h4>
                                <p className="text-brand-text-secondary mt-1 text-sm">{milestone.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Timeline (Horizontal) */}
                    <div className="hidden md:block relative pt-10 h-[300px]">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-border/30 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full bg-brand-accent" style={{ width: activeMilestone || '0%', transition: 'width 0.5s ease-out' }} />
                        </div>

                        <div className="flex justify-between items-start w-full absolute top-1/2 -translate-y-1/2">
                            {milestones.map(milestone => (
                                <div
                                    key={milestone.year}
                                    className="group relative"
                                    style={{ left: milestone.position, position: 'absolute', transform: 'translateX(-50%)' }}
                                    onMouseEnter={() => setActiveMilestone(milestone.position)}
                                    onMouseLeave={() => setActiveMilestone(null)}
                                >
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 bg-brand-accent h-4 md:h-8 group-hover:h-12 transition-all duration-300 origin-top"></div>
                                    <div className="w-4 h-4 bg-brand-surface border-2 border-brand-accent rounded-full absolute -top-2 left-1/2 -translate-x-1/2 group-hover:scale-125 transition-transform z-10" />
                                    <div className="text-center absolute -top-12 left-1/2 -translate-x-1/2 font-mono text-brand-accent font-bold text-xs">{milestone.year}</div>
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 p-4 holographic-panel rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-brand-bg/95">
                                        <h4 className="font-sans font-bold text-brand-text-primary mb-2 text-sm">{milestone.title}</h4>
                                        <p className="text-xs text-brand-text-secondary leading-relaxed">{milestone.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
