import React, { useState } from 'react';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';

interface PhilosophyCard {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    chaosElements: string[];
    clarityElements: string[];
}

const philosophyCards: PhilosophyCard[] = [
    {
        title: "Efficiency by Design",
        subtitle: "Every process should flow like water",
        description: "I don't just fix broken workflows — I architect systems that prevent bottlenecks from forming in the first place.",
        icon: "⚡",
        chaosElements: ["Manual data entry", "Scattered spreadsheets", "Email chains", "Duplicate work"],
        clarityElements: ["Automated pipelines", "Single source of truth", "Real-time dashboards", "Streamlined workflows"]
    },
    {
        title: "Clarity is a Feature",
        subtitle: "If it's not clear, it's not done",
        description: "Complex data doesn't have to mean complex presentations. I transform overwhelming datasets into intuitive, actionable insights.",
        icon: "🎯",
        chaosElements: ["Raw data dumps", "Confusing charts", "Technical jargon", "Information overload"],
        clarityElements: ["Interactive visualizations", "Plain English insights", "Focused KPIs", "Actionable recommendations"]
    },
    {
        title: "Structure Defeats Chaos",
        subtitle: "Order emerges from intelligent design",
        description: "Every business has hidden patterns waiting to be discovered. I build the frameworks that reveal them.",
        icon: "🏗️",
        chaosElements: ["Random processes", "Inconsistent naming", "Ad-hoc solutions", "Tribal knowledge"],
        clarityElements: ["Standardized procedures", "Clear documentation", "Scalable systems", "Knowledge sharing"]
    }
];

const DesignPhilosophy: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <section className="py-20 px-8 lg:px-16 bg-architect-surface/30">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Design Philosophy" />
                    <p className="text-lg text-architect-text/80 mt-4 max-w-3xl mx-auto">
                        My approach to data architecture is built on three core principles that guide every project from chaos to clarity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {philosophyCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => {
                                setIsHovering(true);
                                setHoveredCard(index);
                            }}
                            onMouseLeave={() => {
                                setIsHovering(false);
                                setHoveredCard(null);
                            }}
                        >
                            {/* Blueprint Card */}
                            <div className="relative h-96 bg-architect-dark border border-architect-cyan/30 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-architect-cyan group-hover:shadow-[0_0_30px_theme(colors.architect.cyan/20)]">
                                {/* Blueprint Grid Background */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="w-full h-full" style={{
                                        backgroundImage: `
                                            linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '20px 20px'
                                    }} />
                                </div>

                                {/* Card Content */}
                                <div className="relative z-10 p-6 h-full flex flex-col">
                                    <div className="text-center mb-6">
                                        <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                                            {card.icon}
                                        </div>
                                        <h3 className="font-poppins text-xl font-bold text-architect-cyan mb-2">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-architect-gold font-medium">
                                            {card.subtitle}
                                        </p>
                                    </div>

                                    <p className="text-architect-text/90 text-sm mb-6 flex-grow">
                                        {card.description}
                                    </p>

                                    {/* Chaos to Clarity Transformation */}
                                    <div className="space-y-4">
                                        <div className={`transition-all duration-500 ${hoveredCard === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'} overflow-hidden`}>
                                            <div className="text-xs space-y-2">
                                                <div>
                                                    <p className="text-architect-magenta font-semibold mb-1">CHAOS:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {card.chaosElements.map((element, i) => (
                                                            <span key={i} className="px-2 py-1 bg-architect-magenta/20 text-architect-magenta rounded text-xs">
                                                                {element}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-architect-cyan font-semibold mb-1">CLARITY:</p>
                                                    <div className="flex flex-wrap gap-1">
                                                        {card.clarityElements.map((element, i) => (
                                                            <span key={i} className="px-2 py-1 bg-architect-cyan/20 text-architect-cyan rounded text-xs">
                                                                {element}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Animated Lines */}
                                        <div className="relative h-8">
                                            {hoveredCard === index && (
                                                <svg className="absolute inset-0 w-full h-full">
                                                    <path
                                                        d="M 0 15 Q 50 5, 100 15 T 200 15"
                                                        stroke="url(#chaosGradient)"
                                                        strokeWidth="2"
                                                        fill="none"
                                                        className="animate-draw-path"
                                                        strokeDasharray="200"
                                                        strokeDashoffset="200"
                                                    />
                                                    <defs>
                                                        <linearGradient id="chaosGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#E02997" />
                                                            <stop offset="100%" stopColor="#64FFDA" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DesignPhilosophy;