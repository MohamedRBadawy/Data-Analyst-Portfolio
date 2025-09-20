import React, { useState } from 'react';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';

interface Service {
    title: string;
    description: string;
    icon: string;
    deliverables: string[];
    timeline: string;
    complexity: 'Simple' | 'Moderate' | 'Complex';
}

const services: Service[] = [
    {
        title: "BI Dashboard Construction",
        description: "Transform scattered data into unified, real-time dashboards that drive decision-making.",
        icon: "📊",
        deliverables: ["Interactive Looker/Power BI dashboards", "Automated data pipelines", "KPI monitoring systems", "Mobile-responsive design"],
        timeline: "2-4 weeks",
        complexity: "Moderate"
    },
    {
        title: "Workflow Automation Design",
        description: "Eliminate manual processes with intelligent automation that scales with your business.",
        icon: "⚙️",
        deliverables: ["Google Apps Script automation", "Process documentation", "Error handling systems", "Training materials"],
        timeline: "1-3 weeks",
        complexity: "Simple"
    },
    {
        title: "Data Infrastructure Audit",
        description: "Comprehensive analysis of your current data ecosystem with actionable improvement roadmap.",
        icon: "🔍",
        deliverables: ["Current state assessment", "Gap analysis report", "Optimization roadmap", "ROI projections"],
        timeline: "1-2 weeks",
        complexity: "Simple"
    },
    {
        title: "Custom Analytics Platform",
        description: "Build bespoke analytics solutions tailored to your unique business requirements.",
        icon: "🏗️",
        deliverables: ["Custom dashboard platform", "Advanced analytics models", "User access controls", "Ongoing support"],
        timeline: "6-12 weeks",
        complexity: "Complex"
    },
    {
        title: "Process Optimization Consulting",
        description: "End-to-end workflow analysis and redesign for maximum operational efficiency.",
        icon: "🎯",
        deliverables: ["Workflow mapping", "Bottleneck identification", "Optimization recommendations", "Implementation support"],
        timeline: "3-6 weeks",
        complexity: "Moderate"
    },
    {
        title: "Data Integration Architecture",
        description: "Connect disparate systems into a cohesive data ecosystem that works seamlessly.",
        icon: "🔗",
        deliverables: ["Integration strategy", "API connections", "Data validation systems", "Monitoring dashboards"],
        timeline: "4-8 weeks",
        complexity: "Complex"
    }
];

const getComplexityColor = (complexity: string) => {
    switch (complexity) {
        case 'Simple': return 'architect-cyan';
        case 'Moderate': return 'architect-gold';
        case 'Complex': return 'architect-magenta';
        default: return 'architect-cyan';
    }
};

const ServicesBlueprint: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [hoveredService, setHoveredService] = useState<number | null>(null);

    return (
        <section className="py-20 px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <ScramblingHeading text="Services Blueprint" />
                    <p className="text-lg text-architect-text/80 mt-4 max-w-3xl mx-auto">
                        Each service is architected as a modular solution that can stand alone or integrate seamlessly with your existing systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => {
                                setIsHovering(true);
                                setHoveredService(index);
                            }}
                            onMouseLeave={() => {
                                setIsHovering(false);
                                setHoveredService(null);
                            }}
                        >
                            {/* Blueprint Tile */}
                            <div className="relative h-80 bg-architect-dark border border-architect-cyan/30 rounded-lg overflow-hidden transition-all duration-500 group-hover:border-architect-cyan group-hover:shadow-[0_0_30px_theme(colors.architect.cyan/20)] group-hover:-translate-y-2">
                                {/* Blueprint Grid Background */}
                                <div className="absolute inset-0 opacity-10">
                                    <div className="w-full h-full" style={{
                                        backgroundImage: `
                                            linear-gradient(rgba(100, 255, 218, 0.3) 1px, transparent 1px),
                                            linear-gradient(90deg, rgba(100, 255, 218, 0.3) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '15px 15px'
                                    }} />
                                </div>

                                {/* Animated Blueprint Lines */}
                                {hoveredService === index && (
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                        <defs>
                                            <linearGradient id={`blueprintGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#E02997" stopOpacity="0.3" />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d="M 0 0 L 100 0 L 100 100 L 0 100 Z"
                                            stroke={`url(#blueprintGradient-${index})`}
                                            strokeWidth="2"
                                            fill="none"
                                            strokeDasharray="300"
                                            strokeDashoffset="300"
                                            className="animate-draw-path"
                                            vectorEffect="non-scaling-stroke"
                                        />
                                    </svg>
                                )}

                                {/* Content */}
                                <div className="relative z-10 p-6 h-full flex flex-col">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="text-3xl transform transition-transform duration-300 group-hover:scale-110">
                                            {service.icon}
                                        </div>
                                        <div className={`px-2 py-1 rounded text-xs font-semibold text-${getComplexityColor(service.complexity)} bg-${getComplexityColor(service.complexity)}/20`}>
                                            {service.complexity}
                                        </div>
                                    </div>

                                    <h3 className="font-poppins text-lg font-bold text-architect-cyan mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-architect-text/80 text-sm mb-4 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Timeline */}
                                    <div className="mb-4">
                                        <p className="text-xs text-architect-gold font-semibold">
                                            TIMELINE: {service.timeline}
                                        </p>
                                    </div>

                                    {/* Deliverables (shown on hover) */}
                                    <div className={`transition-all duration-300 ${hoveredService === index ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'} overflow-hidden`}>
                                        <div className="border-t border-architect-cyan/30 pt-3">
                                            <p className="text-xs text-architect-cyan font-semibold mb-2">DELIVERABLES:</p>
                                            <ul className="text-xs text-architect-text/70 space-y-1">
                                                {service.deliverables.map((deliverable, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-architect-cyan mr-2">•</span>
                                                        {deliverable}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/contact"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-block bg-gradient-to-r from-architect-cyan to-architect-gold text-architect-dark font-bold font-poppins py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_theme(colors.architect.cyan)]"
                    >
                        Discuss Your Project Requirements
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesBlueprint;