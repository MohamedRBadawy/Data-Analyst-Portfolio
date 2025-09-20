import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, Rectangle } from 'recharts';
import { useMatrixCountUp } from '../hooks/useMatrixCountUp';
import { caseStudies, CaseStudy } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { CheckIcon, ClipboardListIcon, CodeIcon } from '../constants';
import Modal from './Modal';
import { useInteraction } from '../context/InteractionContext';

const GlowingBar: React.FC<any> = (props) => {
    const { fill, x, y, width, height, isHovered } = props;
    return (
        <Rectangle
            {...props}
            style={{
                filter: isHovered ? `drop-shadow(0 0 8px ${fill})` : 'none',
                transition: 'filter 0.3s ease-in-out',
            }}
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
        { name: 'Before', value: study.before, color: '#F43F5E' },
        { name: 'After', value: study.after, color: '#34D399' },
    ];
    const [hoveredBar, setHoveredBar] = useState<string | null>(null);

    return (
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center bg-brand-surface p-8 rounded-xl border border-brand-border transition-all duration-300 hover:border-brand-accent hover:shadow-[0_0_20px_theme(colors.brand.accent)]`}>
            <div className="lg:w-1/2">
                <h3 className="font-poppins text-3xl font-bold text-brand-accent mb-4">{study.title}</h3>
                <p className="mb-2"><strong className="text-brand-chaos">Problem:</strong> {study.problem}</p>
                <p className="mb-4"><strong className="text-brand-clarity">Impact:</strong> {study.impact}</p>
                 <button
                    onClick={onViewDetails}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    className="mt-4 font-poppins font-bold py-2 px-6 rounded-lg border-2 border-brand-process text-brand-process transition-all duration-300 hover:bg-brand-process hover:text-white"
                >
                    View Project Details
                </button>
            </div>
            <div className="lg:w-1/2 w-full text-center">
                <h4 className="font-poppins text-xl mb-4">{study.metric}</h4>
                <div className="h-64 w-full">
                    <ResponsiveContainer>
                        <BarChart 
                            data={data} 
                            margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                            onMouseLeave={() => setHoveredBar(null)}
                        >
                            <XAxis dataKey="name" tick={{ fill: '#E5E7EB' }} />
                            <YAxis tick={{ fill: '#E5E7EB' }} />
                            <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{backgroundColor: '#1F2937', border: '1px solid #374151'}}/>
                            <Bar 
                                dataKey="value"
                                onMouseEnter={(d) => setHoveredBar(d.name)}
                                shape={(props) => <GlowingBar {...props} isHovered={hoveredBar === props.payload.name} />}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <p className="font-roboto-mono text-2xl mt-4">
                    From {study.before} to <span ref={ref} className="text-brand-clarity font-bold inline-block" style={{minWidth: '3ch'}}>{afterCount}</span>
                </p>
            </div>
        </div>
    );
};


const CaseStudies: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

    const handleOpenModal = (study: CaseStudy) => {
        setSelectedStudy(study);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedStudy(null), 300); // For fade-out animation
    };
    
    const data = [
        { name: 'Before', value: selectedStudy?.before, color: '#F43F5E' },
        { name: 'After', value: selectedStudy?.after, color: '#34D399' },
    ];
    const { val: afterCount, ref } = useMatrixCountUp(selectedStudy?.after ?? 0);

    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="Real Results, Real Businesses" />
                <p className="text-lg text-brand-text/80 mt-2">See how data-driven clarity has transformed operations.</p>
            </div>
            <div className="max-w-6xl mx-auto space-y-12">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard 
                        key={study.title} 
                        study={study} 
                        reversed={index % 2 !== 0}
                        onViewDetails={() => handleOpenModal(study)}
                    />
                ))}
            </div>
            {selectedStudy && (
                 <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={selectedStudy.title}>
                    <div className="space-y-8">
                        {/* Subtitle / Tech Stack */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-brand-text/80 font-roboto-mono">
                            <span><strong className="font-poppins text-brand-text/90">Client:</strong> {selectedStudy.client}</span>
                            <div className="flex items-center gap-2">
                                <CodeIcon className="w-5 h-5 text-brand-cta" />
                                <span>{selectedStudy.technologies.join(', ')}</span>
                            </div>
                        </div>

                        {/* Story */}
                        <div>
                            <h4 className="font-poppins text-xl font-bold text-brand-accent mb-3">The Challenge</h4>
                            <p className="text-brand-text/90">{selectedStudy.story}</p>
                        </div>
                        
                        {/* Process */}
                        <div>
                            <h4 className="font-poppins text-xl font-bold text-brand-accent mb-4">My Process</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedStudy.process.map((step, index) => (
                                    <div key={index} className="bg-brand-bg p-4 rounded-lg">
                                        <h5 className="font-bold font-poppins text-brand-process mb-1">{index + 1}. {step.title}</h5>
                                        <p className="text-sm text-brand-text/80">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Results */}
                        <div>
                            <h4 className="font-poppins text-xl font-bold text-brand-accent mb-4">The Results</h4>
                            <div className="flex flex-col lg:flex-row gap-8 bg-brand-bg p-6 rounded-lg">
                                <div className="lg:w-1/2">
                                    <div className="flex items-center mb-3">
                                        <ClipboardListIcon className="w-6 h-6 text-brand-clarity mr-3" />
                                        <h5 className="font-poppins font-bold text-lg">Key Achievements</h5>
                                    </div>
                                    <ul className="space-y-2">
                                        {selectedStudy.achievements.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <CheckIcon className="w-4 h-4 text-brand-clarity mr-3 mt-1 flex-shrink-0" />
                                                <span className="text-brand-text/90">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="lg:w-1/2 w-full text-center">
                                    <h5 className="font-poppins text-lg mb-4">{selectedStudy.metric}</h5>
                                    <div className="h-48 w-full">
                                        <ResponsiveContainer>
                                            <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                                                <XAxis dataKey="name" tick={{ fill: '#E5E7EB' }} />
                                                <YAxis tick={{ fill: '#E5E7EB' }} />
                                                <Tooltip cursor={{fill: 'rgba(255,255,255,0.1)'}} contentStyle={{backgroundColor: '#1F2937', border: '1px solid #374151'}}/>
                                                <Bar dataKey="value">
                                                    {data.map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.color} /> ))}
                                                </Bar>
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                     <p className="font-roboto-mono text-xl mt-4">
                                        From {selectedStudy.before} to <span ref={ref} className="text-brand-clarity font-bold inline-block">{afterCount}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default CaseStudies;