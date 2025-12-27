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
        <section className="py-16 lg:py-20">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="font-poppins text-h2 font-bold text-brand-text-primary">
                    Are You Facing These Common Bottlenecks?
                </h2>
                <p className="text-xl text-brand-text-secondary mt-4">If so, you're not alone. I specialize in solving these exact problems.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {problems.map(item => (
                    <div key={item.problem} className="holographic-panel p-8 rounded-xl text-center flex flex-col">
                        <div className="flex-grow">
                            {/* Problem Section */}
                            <h3 className="font-poppins text-h3 font-bold text-brand-chaos text-glow-chaos mb-6">{item.problem}</h3>
                            <p className="text-brand-text-secondary mb-10 text-base leading-relaxed">{item.problemDesc}</p>

                            {/* Transformation Arrow */}
                            <div className="my-10">
                                <svg width="100" height="20" viewBox="0 0 100 20" className="mx-auto">
                                    <path d="M 0 10 C 25 20, 25 0, 50 10 S 75 20, 100 10" stroke="var(--brand-chaos)" fill="none" strokeWidth="2" strokeDasharray="4 4" />
                                    <path d="M 0 10 L 100 10" stroke="var(--brand-clarity)" fill="none" strokeWidth="2" strokeDasharray="100" strokeDashoffset="100">
                                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" begin="0.5s" fill="freeze" />
                                    </path>
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
                                className="btn btn-secondary w-full"
                            >
                                {item.ctaText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProblemSolution;