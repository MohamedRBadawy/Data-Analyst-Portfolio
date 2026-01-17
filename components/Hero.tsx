
import React from 'react';
import ScramblingHeading from './ScramblingHeading';
import RevealOnScroll from './RevealOnScroll';
import { useInteraction } from '../context/InteractionContext';
import { Page } from '../App';

interface HeroProps {
    navigateTo: (page: Page) => void;
}

const StaggeredRevealText: React.FC<{ text: string; baseDelay: number }> = ({ text, baseDelay }) => {
    const words = text.split(' ');
    return (
        <p className="text-base sm:text-lg text-ops-text-secondary mt-8 max-w-3xl mx-auto relative z-10">
            {words.map((word, i) => (
                <span key={i} className="inline-block">
                    {word}{' '}
                </span>
            ))}
        </p>
    );
};



const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
    const { setIsHovering } = useInteraction();

    return (
        <section className="flex items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden pt-6 pb-8 lg:pt-10 lg:pb-12">
            {/* Soft Ambient Background - Reduced Blur/Opacity */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-signal-info/[0.04] rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl relative z-10 flex flex-col items-center">
                {/* Executive Framing Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ops-border bg-ops-surface/50 backdrop-blur-sm mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></div>
                    <span className="font-mono text-ops-text-secondary text-sm tracking-wider uppercase font-medium">
                        Operational Intelligence for Growing SMBs
                    </span>
                </div>

                {/* Main Headline - Instantly Readable */}
                <RevealOnScroll direction="up" delay={0}>
                    <ScramblingHeading
                        text="Turn Operational Chaos Into Automated Clarity"
                        duration={1700}
                        className="mb-3 max-w-6xl mx-auto"
                        textClasses="font-sans text-[3.2rem] sm:text-[5rem] md:text-[6.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ops-text-primary via-ops-text-primary to-signal-success leading-[1.0] tracking-[-0.03em] word-break break-word overflow-wrap break-word"
                    />
                </RevealOnScroll>

                {/* Sub-headline - Plain Language Value Prop */}
                <RevealOnScroll direction="up" delay={200}>
                    <p className="text-lg sm:text-2xl text-brand-text-primary/80 font-medium max-w-3xl mx-auto leading-[1.6] mb-8">
                        Stop running your business on spreadsheets and gut feel.
                        I transform manual workflows into <span className="text-neon font-bold">custom data systems</span> that save time, reduce errors, and scale with you.
                    </p>
                </RevealOnScroll>

                {/* Credibility & Trust Section - High Visibility */}
                <RevealOnScroll direction="up" delay={300} width="100%" className="mb-8 flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="bg-ops-surface/30 border border-ops-border/50 rounded-lg p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-center gap-10 smooth-transition shadow-md hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                            <div className="flex flex-col text-center items-center flex-1">
                                <span className="text-sm text-ops-text-secondary uppercase tracking-[0.2em] mb-3">How Results Are Measured</span>
                                <p className="text-brand-text-primary/80 font-medium text-xl leading-relaxed max-w-md">
                                    Every project includes baseline metrics, intervention logic, and post-deployment deltas. No vanity metrics. No blended outcomes.
                                </p>
                            </div>
                            <div className="h-px w-full md:w-px md:h-20 bg-ops-border/40"></div>
                            <div className="flex flex-col text-center items-center flex-1">
                                <span className="text-sm text-ops-text-secondary uppercase tracking-[0.2em] mb-3">What You Can Inspect</span>
                                <p className="text-brand-text-primary/80 font-medium text-xl leading-relaxed max-w-md">
                                    Inputs, assumptions, failure points, and before/after performance are documented per system. You can trace every claim back to a decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* CTA Area */}
                <RevealOnScroll direction="up" delay={400}>
                    <div className="flex flex-col items-center max-w-md mx-auto">
                        <button
                            onClick={() => navigateTo('contact')}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="btn btn-primary mb-4 text-sm px-12 py-4 smooth-transition hover:shadow-lg hover:-translate-y-1"
                        >
                            Book Your Free Clarity Audit
                        </button>
                        <p className="text-ops-text-secondary text-sm opacity-85">
                            No pitch. No obligation. Just 30 minutes to find your bottlenecks.
                        </p>
                    </div>
                </RevealOnScroll>
            </div>


        </section>
    );
};

export default Hero;

