import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Rectangle } from 'recharts';
import { CaseStudy } from '../data/content';
import { useMatrixCountUp } from '../hooks/useMatrixCountUp';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, ClipboardListIcon, CodeIcon } from '../constants';

interface ProjectDetailPageProps {
    project: CaseStudy;
    onBack: () => void;
}

const HolographicBar: React.FC<any> = (props) => {
    const { fill, x, y, width, height, isHovered, payload } = props;
    const isBefore = payload.name === 'Before';
    const color = payload.color;

    const barStyle = {
        filter: isHovered ? `drop-shadow(0 0 8px ${color})` : 'none',
        transition: 'filter 0.3s ease-in-out',
    };

    if (isBefore) {
        return (
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                stroke={color}
                strokeWidth={2}
                fill="transparent"
                style={barStyle}
            />
        );
    }

    return (
        <Rectangle
            {...props}
            fill={color}
            style={barStyle}
        />
    );
};

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project, onBack }) => {
    const { setIsHovering } = useInteraction();
    const { val: afterCount, ref } = useMatrixCountUp(project.after);

    const data = [
        { name: 'Before', value: project.before, color: 'var(--brand-chaos)' },
        { name: 'After', value: project.after, color: 'var(--brand-clarity)' },
    ];

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
                    <ScramblingHeading text={project.title} />
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-brand-text-secondary font-roboto-mono mt-6">
                        <span><strong className="font-poppins text-brand-text-primary">Client:</strong> {project.client}</span>
                        <div className="flex items-center gap-2">
                            <CodeIcon className="w-5 h-5 text-brand-cta" />
                            <span>{project.technologies.join(', ')}</span>
                        </div>
                    </div>
                </header>

                <article className="space-y-16">
                    {/* Executive Story Format - Show if available */}
                    {project.theMoment && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-chaos text-glow-chaos mb-6">The Moment</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-chaos pl-6 sm:pl-8">
                                {project.theMoment}
                            </p>
                        </section>
                    )}

                    {project.whatWasAtRisk && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-chaos text-glow-chaos mb-6">What Was at Risk</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-chaos pl-6 sm:pl-8">
                                {project.whatWasAtRisk}
                            </p>
                        </section>
                    )}

                    {project.whatChanged && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6">What Changed</h3>
                            <p className="text-lg text-brand-text-primary leading-relaxed border-l-4 border-brand-accent pl-6 sm:pl-8">
                                {project.whatChanged}
                            </p>
                        </section>
                    )}

                    {/* How It Worked - Original story field */}
                    <section>
                        <h3 className="font-poppins text-h3 text-brand-clarity text-glow-clarity mb-6">{project.theMoment ? 'How It Worked' : 'The Story'}</h3>
                        <p className="text-xl text-brand-text-primary leading-relaxed border-l-4 border-brand-accent pl-6 sm:pl-8">{project.story}</p>
                    </section>

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">My Process</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.process.map((step, index) => (
                                <div key={index} className="holographic-panel p-6 rounded-lg">
                                    <h4 className="font-bold font-poppins text-xl text-brand-text-primary mb-2">{index + 1}. {step.title}</h4>
                                    <p className="text-brand-text-secondary">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">The Results</h3>
                        <div className="flex flex-col lg:flex-row gap-8 holographic-panel p-6 sm:p-8 rounded-lg">
                            <div className="lg:w-1/2">
                                <div className="flex items-center mb-4">
                                    <ClipboardListIcon className="w-8 h-8 text-brand-clarity mr-3" />
                                    <h4 className="font-poppins font-bold text-2xl">Key Achievements</h4>
                                </div>
                                <ul className="space-y-3">
                                    {project.achievements.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckIcon className="w-5 h-5 text-brand-clarity mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-brand-text-primary">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-1/2 w-full text-center bg-brand-bg p-4 rounded-lg border border-brand-border">
                                <h4 className="font-poppins text-xl mb-4">{project.metric}</h4>
                                <div className="h-64 w-full">
                                    <ResponsiveContainer>
                                        <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                            <XAxis dataKey="name" tick={{ fill: 'var(--brand-text-primary)' }} />
                                            <YAxis tick={{ fill: 'var(--brand-text-primary)' }} />
                                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }} />
                                            <Bar dataKey="value" shape={(props: any) => <HolographicBar {...props} />}>
                                                {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                                            </Bar>
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                                <p className="font-roboto-mono text-3xl mt-4">
                                    From {project.before} to <span ref={ref} className="text-brand-clarity font-bold inline-block">{afterCount}</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How the Impact Was Measured - Transparency & Auditability */}
                    {project.howMeasured && (
                        <section>
                            <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-6">How the Impact Was Measured</h3>
                            <p className="text-brand-text-primary leading-relaxed whitespace-pre-wrap border-l-4 border-brand-border/50 pl-6 sm:pl-8">
                                {project.howMeasured}
                            </p>
                        </section>
                    )}

                    <section>
                        <h3 className="font-poppins text-h3 text-brand-accent text-glow-accent mb-8 text-center">Key Deliverables</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.deliverables.map((item, index) => (
                                <div key={index} className="flex items-center holographic-panel p-4 rounded-lg">
                                    <span className="text-brand-accent mr-3 text-lg">✓</span>
                                    <span className="text-brand-text-primary">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </div>
        </div>
    );
};

export default ProjectDetailPage;