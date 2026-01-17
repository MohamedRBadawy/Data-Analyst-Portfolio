
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

const ScrollIndicator: React.FC = () => (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-fade-in-up" style={{ animationDelay: '2500ms' }}>
        <span className="text-ops-text-secondary text-sm uppercase tracking-widest mb-2">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-signal-info to-transparent"></div>
    </div>
);

const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
    const { setIsHovering } = useInteraction();

    return (
        <section className="min-h-screen flex items-center justify-center text-center px-4 sm:px-8 relative overflow-hidden pt-20 pb-20 bg-ops-bg">
            {/* Soft Ambient Background - Reduced Blur/Opacity */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-signal-info/[0.04] rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-5xl relative z-10 flex flex-col items-center">
                {/* Executive Framing Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ops-border bg-ops-surface/50 backdrop-blur-sm mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-signal-success animate-pulse"></div>
                    <span className="font-mono text-ops-text-secondary text-xs tracking-wider uppercase font-medium">
                        Operational Intelligence for Growing SMBs
                    </span>
                </div>

                {/* Main Headline - Instantly Readable */}
                <RevealOnScroll direction="up" delay={0}>
                    <ScramblingHeading
                        text="Turn Operational Chaos Into Automated Clarity"
                        duration={600}
                        className="font-sans text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ops-text-primary via-ops-text-primary to-signal-success leading-[1.1] mb-6 tracking-tight max-w-4xl word-break break-word overflow-wrap break-word"
                    />
                </RevealOnScroll>

                {/* Sub-headline - Plain Language Value Prop */}
                <RevealOnScroll direction="up" delay={200}>
                    <p className="text-base sm:text-lg text-ops-text-secondary max-w-2xl mx-auto leading-relaxed mb-12">
                        Stop running your business on spreadsheets and gut feel.
                        I transform manual workflows into <span className="text-ops-text-primary font-semibold">custom data systems</span> that save time, reduce errors, and scale with you.
                    </p>
                </RevealOnScroll>

                {/* Credibility & Trust Section - High Visibility */}
                <RevealOnScroll direction="up" delay={300} width="100%" className="mb-16 flex justify-center">
                    <div className="w-full max-w-3xl">
                        <div className="bg-ops-surface/30 border border-ops-border/50 rounded-lg p-7 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8 smooth-transition shadow-md hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden">
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-ops-text-secondary uppercase tracking-widest mb-2">Real-World Results</span>
                                <p className="text-ops-text-primary text-sm leading-relaxed max-w-xs">
                                    7 completed projects with measured reductions in time, defects, and delivery risk.
                                </p>
                            </div>
                            <div className="h-px w-full md:w-px md:h-12 bg-ops-border/40"></div>
                            <div className="flex flex-col text-left">
                                <span className="text-xs text-ops-text-secondary uppercase tracking-widest mb-2">Transparent Details</span>
                                <p className="text-ops-text-primary text-sm leading-relaxed max-w-xs">
                                    Before/after metrics and process breakdowns for each project. No aggregates—full visibility.
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
                            className="btn btn-primary mb-6 text-sm px-12 py-4 smooth-transition hover:shadow-lg hover:-translate-y-1"
                        >
                            Book Your Free Clarity Audit
                        </button>
                        <p className="text-ops-text-secondary text-xs opacity-85">
                            No pitch. No obligation. Just 30 minutes to find your bottlenecks.
                        </p>
                    </div>
                </RevealOnScroll>
            </div>

            <ScrollIndicator />
        </section>
    );
};

export default Hero;

