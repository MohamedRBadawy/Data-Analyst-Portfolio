import React from 'react';
import { useInteraction } from '../context/InteractionContext';
import { problems } from '../data/content';
import ScramblingHeading from './ScramblingHeading';

interface FlipCardProps {
    problem: string;
    problemDesc: string;
    solution: string;
    solutionDesc: string;
    scrollToSection: () => void;
}

const FlipCard: React.FC<FlipCardProps> = ({ problem, problemDesc, solution, solutionDesc, scrollToSection }) => {
    const { setIsHovering } = useInteraction();
    return (
        <div 
            className="group perspective h-80 w-full"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            tabIndex={0}
        >
            <div className="relative transform-style-3d group-hover:rotate-y-180 group-focus-within:rotate-y-180 w-full h-full transition-transform duration-700 ease-in-out">
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden bg-brand-chaos/10 border-2 border-brand-chaos rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:shadow-[0_0_20px_theme(colors.brand.chaos)]">
                    <div className="group-hover:animate-glitch group-focus-within:animate-glitch group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#F43F5E,0_0_20px_#F43F5E] group-focus-within:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#F43F5E,0_0_20px_#F43F5E]">
                        <h3 className="font-poppins text-2xl font-bold text-brand-chaos mb-2">{problem}</h3>
                        <p className="text-brand-text">{problemDesc}</p>
                    </div>
                </div>
                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-brand-clarity/10 border-2 border-brand-clarity rounded-xl p-6 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:shadow-[0_0_20px_theme(colors.brand.clarity)]">
                    <div className="group-hover:animate-glitch group-focus-within:animate-glitch group-hover:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#34D399,0_0_20px_#34D399] group-focus-within:[text-shadow:0_0_5px_#fff,0_0_10px_#fff,0_0_15px_#34D399,0_0_20px_#34D399]">
                        <h3 className="font-poppins text-2xl font-bold text-brand-clarity mb-2">{solution}</h3>
                        <p className="text-brand-text">{solutionDesc}</p>
                        <button onClick={scrollToSection} className="mt-4 text-sm text-brand-clarity hover:underline cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-clarity rounded">See Case Study →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

interface ProblemSolutionProps {
    scrollToSection: () => void;
}

const ProblemSolution: React.FC<ProblemSolutionProps> = ({ scrollToSection }) => {
    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="text-center mb-12">
                <ScramblingHeading text="Your Problems, Solved." />
                <p className="text-lg text-brand-text/80 mt-2">I turn common business bottlenecks into opportunities for growth.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problems.map((p, i) => <FlipCard key={i} {...p} scrollToSection={scrollToSection} />)}
            </div>
        </section>
    );
};

export default ProblemSolution;