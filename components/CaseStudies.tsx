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
            className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-[var(--space-xl)] items-center holographic-panel p-8 sm:p-9 rounded-xl cursor-pointer border border-brand-border/50 smooth-transition shadow-lg hover:shadow-2xl hover:-translate-y-2 card-hover`}
        >
            <div className="lg:w-1/2">
                {/* One-Line Result - NEW */}
                {study.oneLineResult && (
                    <div className="mb-4 pb-4 border-b border-brand-accent/30">
                        <p className="text-xs uppercase tracking-wider text-brand-accent font-mono mb-1">Result</p>
                        <p className="text-brand-text-primary font-semibold leading-snug text-sm">
                            {study.oneLineResult}
                        </p>
                    </div>
                )}
                <h3 className="font-sans text-2xl font-bold text-brand-accent text-glow-accent mb-4">{study.title}</h3>
                <p className="mb-2 text-sm"><strong className="text-brand-chaos text-glow-chaos">Problem:</strong> {study.problem}</p>
                <p className="mb-4 text-sm"><strong className="text-brand-clarity text-glow-accent">Impact:</strong> {study.impact}</p>
                <div className="inline-flex items-center px-4 py-2.5 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-md text-xs uppercase font-mono font-bold tracking-[0.1em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 transition-all duration-300 mt-4">
                    View Project Details &rarr;
                </div>
            </div>
            <div className="lg:w-1/2 w-full text-center">
                <h4 className="font-sans text-lg font-bold mb-4">{study.metric}</h4>
                <div className="h-64 w-full">
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
                <p className="font-roboto-mono text-3xl mt-4">
                    From {study.before} to <span ref={ref} className="text-brand-clarity font-bold inline-block" style={{ minWidth: '3ch' }}>{afterCount}</span>
                </p>
            </div>
        </div>
    );
};

interface CaseStudiesProps {
    showProjectDetailPage: (study: CaseStudy) => void;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ showProjectDetailPage }) => {
    // Sort projects: Tier A (with tierAStructure) first
    const sortedCaseStudies = [...caseStudies].sort((a, b) => {
        const aTierA = a.tierAStructure ? 1 : 0;
        const bTierA = b.tierAStructure ? 1 : 0;
        return bTierA - aTierA; // Tier A projects first
    });

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Featured Projects" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">A selection of projects demonstrating real business impact.</p>
                </div>
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
