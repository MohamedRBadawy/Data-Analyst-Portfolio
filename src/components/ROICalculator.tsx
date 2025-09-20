import React, { useState, useEffect } from 'react';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';

const ROICalculator: React.FC = () => {
    const { setIsHovering } = useInteraction();
    const [employees, setEmployees] = useState(25);
    const [hoursPerWeek, setHoursPerWeek] = useState(8);
    const [hourlyRate, setHourlyRate] = useState(35);
    const [showResults, setShowResults] = useState(false);

    const currentWaste = employees * hoursPerWeek * hourlyRate * 52;
    const potentialSavings = currentWaste * 0.65; // 65% efficiency gain
    const monthlySavings = potentialSavings / 12;

    useEffect(() => {
        const timer = setTimeout(() => setShowResults(true), 1000);
        return () => clearTimeout(timer);
    }, [employees, hoursPerWeek, hourlyRate]);

    return (
        <section className="py-20 px-8 lg:px-16 bg-gradient-to-br from-architect-dark to-architect-surface/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <ScramblingHeading text="Potential Analysis Tool" />
                    <p className="text-lg text-architect-text/80 mt-4">
                        Calculate the hidden cost of inefficient processes in your organization
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Input Controls */}
                    <div className="space-y-8">
                        <div className="bg-architect-surface/50 backdrop-blur-sm border border-architect-cyan/30 rounded-lg p-6">
                            <h3 className="font-poppins text-xl font-bold text-architect-cyan mb-6">
                                Current State Analysis
                            </h3>
                            
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-architect-text/80 mb-2">
                                        Number of Employees
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="5"
                                            max="500"
                                            value={employees}
                                            onChange={(e) => setEmployees(Number(e.target.value))}
                                            className="w-full h-2 bg-architect-surface rounded-lg appearance-none cursor-pointer slider"
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        />
                                        <div className="flex justify-between text-xs text-architect-text/60 mt-1">
                                            <span>5</span>
                                            <span className="font-roboto-mono text-architect-cyan font-bold">{employees}</span>
                                            <span>500</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-architect-text/80 mb-2">
                                        Hours/Week on Manual Tasks
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="1"
                                            max="20"
                                            value={hoursPerWeek}
                                            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                                            className="w-full h-2 bg-architect-surface rounded-lg appearance-none cursor-pointer slider"
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        />
                                        <div className="flex justify-between text-xs text-architect-text/60 mt-1">
                                            <span>1</span>
                                            <span className="font-roboto-mono text-architect-cyan font-bold">{hoursPerWeek}</span>
                                            <span>20</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-architect-text/80 mb-2">
                                        Average Hourly Rate ($)
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="range"
                                            min="15"
                                            max="100"
                                            value={hourlyRate}
                                            onChange={(e) => setHourlyRate(Number(e.target.value))}
                                            className="w-full h-2 bg-architect-surface rounded-lg appearance-none cursor-pointer slider"
                                            onMouseEnter={() => setIsHovering(true)}
                                            onMouseLeave={() => setIsHovering(false)}
                                        />
                                        <div className="flex justify-between text-xs text-architect-text/60 mt-1">
                                            <span>$15</span>
                                            <span className="font-roboto-mono text-architect-cyan font-bold">${hourlyRate}</span>
                                            <span>$100</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results Display */}
                    <div className="space-y-6">
                        <div className={`transition-all duration-1000 ${showResults ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'}`}>
                            <div className="bg-gradient-to-br from-architect-magenta/20 to-architect-surface/50 backdrop-blur-sm border border-architect-magenta/30 rounded-lg p-6 mb-6">
                                <h4 className="font-poppins text-lg font-bold text-architect-magenta mb-4">
                                    Current Annual Waste
                                </h4>
                                <div className="text-center">
                                    <p className="font-roboto-mono text-4xl font-bold text-architect-magenta mb-2">
                                        ${currentWaste.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-architect-text/70">
                                        Lost to inefficient processes
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-architect-cyan/20 to-architect-surface/50 backdrop-blur-sm border border-architect-cyan/30 rounded-lg p-6 mb-6">
                                <h4 className="font-poppins text-lg font-bold text-architect-cyan mb-4">
                                    Potential Annual Savings
                                </h4>
                                <div className="text-center">
                                    <p className="font-roboto-mono text-4xl font-bold text-architect-cyan mb-2">
                                        ${potentialSavings.toLocaleString()}
                                    </p>
                                    <p className="text-sm text-architect-text/70">
                                        Through process optimization
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-architect-gold/20 to-architect-surface/50 backdrop-blur-sm border border-architect-gold/30 rounded-lg p-6">
                                <h4 className="font-poppins text-lg font-bold text-architect-gold mb-4">
                                    Monthly Impact
                                </h4>
                                <div className="text-center">
                                    <p className="font-roboto-mono text-3xl font-bold text-architect-gold mb-2">
                                        ${Math.round(monthlySavings).toLocaleString()}
                                    </p>
                                    <p className="text-sm text-architect-text/70">
                                        Recurring monthly savings
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={`text-center transition-all duration-1000 delay-500 ${showResults ? 'opacity-100' : 'opacity-0'}`}>
                            <a
                                href="/contact"
                                onMouseEnter={() => setIsHovering(true)}
                                onMouseLeave={() => setIsHovering(false)}
                                className="inline-block bg-gradient-to-r from-architect-cyan to-architect-gold text-architect-dark font-bold font-poppins py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_theme(colors.architect.cyan)]"
                            >
                                Ready to Realize These Savings?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;