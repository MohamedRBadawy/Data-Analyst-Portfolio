import React from 'react';
import { problems } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import { Page } from '../App';

interface ProblemSolutionProps {
    navigateTo: (page: Page) => void;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ navigateTo }) => {
    const { setIsHovering } = useInteraction();

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="max-w-6xl mx-auto text-center mb-16">
                    <h2 className="font-poppins text-h2 font-bold text-brand-text-primary">
                        Are You Facing These Common Bottlenecks?
                    </h2>
                    <p className="text-xl text-brand-text-secondary mt-4">If so, you're not alone. I specialize in solving these exact problems.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-[var(--space-xl)]">
                    {problems.map(item => (
                        <div key={item.problem} className="holographic-panel p-[var(--space-lg)] rounded-xl text-center flex flex-col">
                            <div className="flex-grow">
                                {/* Problem Section */}
                                <h3 className="font-poppins text-h3 font-bold text-brand-chaos text-glow-chaos mb-6">{item.problem}</h3>
                                <p className="text-brand-text-secondary mb-10 text-base leading-relaxed">{item.problemDesc}</p>

                                {/* Transformation Arrow */}
                                <div className="my-10">
                                    <svg width="100" height="20" viewBox="0 0 100 20" className="mx-auto">
                                        <path d="M 0 10 L 100 10" stroke="var(--brand-clarity)" fill="none" strokeWidth="2" />
                                    </svg>
                                </div>

                                {/* Solution Section */}
                                <h3 className="font-poppins text-h3 font-bold text-brand-clarity text-glow-accent mb-6">{item.solution}</h3>
                                <p className="text-brand-text-secondary text-base leading-relaxed">{item.solutionDesc}</p>
                            </div>
                            <div className="mt-8">
                                <button
                                    onClick={() => navigateTo(item.targetPage)}
                                    onMouseEnter={() => setIsHovering(true)}
                                    onMouseLeave={() => setIsHovering(false)}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.15em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] w-full group"
                                >
                                    {item.ctaText}
                                    <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
