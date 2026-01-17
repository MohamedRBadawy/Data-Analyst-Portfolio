import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Rectangle } from 'recharts';
import { useMatrixCountUp } from '../hooks/useMatrixCountUp';
import { caseStudies, CaseStudy } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

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

interface CaseStudyCardProps {
    study: CaseStudy;
    reversed?: boolean;
    onViewDetails: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, reversed = false, onViewDetails }) => {
    const { setIsHovering } = useInteraction();
    const { val: afterCount, ref } = useMatrixCountUp(study.after);
    const data = [
        { name: 'Before', value: study.before, color: 'var(--brand-chaos)' },
        { name: 'After', value: study.after, color: 'var(--brand-clarity)' },
    ];
    const [hoveredBar, setHoveredBar] = useState<string | null>(null);

    return (
        <div
            onClick={onViewDetails}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-[var(--space-xl)] items-center holographic-panel p-10 sm:p-12 rounded-xl cursor-pointer border border-brand-border/50 smooth-transition shadow-lg hover:shadow-2xl hover:-translate-y-2 card-hover`}
        >
            <div className="lg:w-1/2">
                {/* One-Line Result - NEW */}
                {study.oneLineResult && (
                    <div className="mb-6 pb-5 border-b border-brand-accent/30">
                        <p className="text-base uppercase tracking-wider text-brand-clarity font-sans font-bold mb-2">Result</p>
                        <p className="text-brand-text-primary font-semibold leading-relaxed text-lg">
                            {study.oneLineResult}
                        </p>
                    </div>
                )}
                <h3 className="font-poppins text-4xl font-bold text-brand-accent text-glow-accent mb-4">{study.title}</h3>
                <div className="mb-8 space-y-4">
                    <p className="text-xl text-brand-text-primary leading-relaxed"><strong className="font-bold text-brand-chaos">Problem:</strong> <span className="text-brand-text-primary/80 font-medium">{study.problem}</span></p>
                    <p className="text-xl text-brand-text-primary leading-relaxed"><strong className="font-bold text-brand-clarity">Impact:</strong> <span className="text-brand-text-primary/80 font-medium">{study.impact}</span></p>
                </div>
                <div className="inline-flex items-center text-base uppercase font-sans font-bold tracking-[0.15em] text-brand-text-secondary group-hover:text-brand-accent transition-all duration-300 mt-4">
                    View Project <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </div>
            </div>
            <div className="lg:w-1/2 w-full text-center">
                <h4 className="font-sans text-2xl font-bold mb-6 text-brand-text-primary">{study.metric}</h4>
                <div className="h-80 w-full">
                    <ResponsiveContainer>
                        <BarChart
                            data={data}
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                            onMouseLeave={() => setHoveredBar(null)}
                        >
                            <XAxis dataKey="name" tick={{ fill: 'var(--brand-text-primary)' }} />
                            <YAxis tick={{ fill: 'var(--brand-text-primary)' }} />
                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.1)' }} contentStyle={{ backgroundColor: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }} />
                            <Bar
                                dataKey="value"
                                onMouseEnter={(d) => setHoveredBar(d.name)}
                                shape={(props) => <HolographicBar {...props} isHovered={hoveredBar === props.payload.name} />}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="font-sans text-5xl font-bold mt-6 text-brand-text-primary">
                    From <span className="text-brand-chaos">{study.before}</span> to <span ref={ref} className="text-brand-clarity inline-block" style={{ minWidth: '3ch' }}>{afterCount}</span>
                </p>
            </div>
        </div>
    );
};

interface CaseStudiesProps {
    showProjectDetailPage: (study: CaseStudy) => void;
    hideHero?: boolean;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ showProjectDetailPage, hideHero = false }) => {
    // Sort projects: Tier A (with tierAStructure) first
    const sortedCaseStudies = [...caseStudies].sort((a, b) => {
        const aTierA = a.tierAStructure ? 1 : 0;
        const bTierA = b.tierAStructure ? 1 : 0;
        return bTierA - aTierA; // Tier A projects first
    });

    return (
        <section className={`py-[var(--space-3xl)] px-[var(--space-lg)] ${hideHero ? 'pt-0' : ''}`}>
            <div className="content-container">
                {!hideHero && (
                    <div className="text-center mb-16">
                        <ScramblingHeading text="Featured Projects" />
                        <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">A selection of projects demonstrating real business impact.</p>
                    </div>
                )}
                <div className="max-w-6xl mx-auto space-y-12">
                    {sortedCaseStudies.map((study, index) => (
                        <CaseStudyCard
                            key={study.title}
                            study={study}
                            reversed={index % 2 !== 0}
                            onViewDetails={() => showProjectDetailPage(study)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
