import React, { useRef } from 'react';
import { useMatrixCountUp } from '../hooks/useMatrixCountUp';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Stat {
    value: number;
    label: string;
    suffix: string;
    color: 'cyan' | 'magenta' | 'gold';
}

const stats: Stat[] = [
    { value: 150, label: "Projects Delivered", suffix: "+", color: 'cyan' },
    { value: 67, label: "Avg Efficiency Gain", suffix: "%", color: 'gold' },
    { value: 2.4, label: "Million in Savings", suffix: "M", color: 'magenta' },
    { value: 98, label: "Client Satisfaction", suffix: "%", color: 'cyan' }
];

const QuickStats: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3 });

    return (
        <section ref={sectionRef} className="py-20 px-8 lg:px-16 bg-architect-surface/20">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const { val, ref } = useMatrixCountUp(stat.value, 2000);
                        const colorClass = `architect-${stat.color}`;
                        
                        return (
                            <div key={index} className="text-center group">
                                <div className={`inline-block p-6 rounded-lg bg-${colorClass}/10 border border-${colorClass}/30 transition-all duration-500 group-hover:bg-${colorClass}/20 group-hover:shadow-[0_0_20px_theme(colors.${colorClass.replace('-', '.')}/20)]`}>
                                    <div ref={ref} className={`font-roboto-mono text-4xl lg:text-5xl font-bold text-${colorClass} mb-2`}>
                                        {isVisible ? val : '0'}{stat.suffix}
                                    </div>
                                    <p className="text-architect-text/80 text-sm font-medium">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QuickStats;