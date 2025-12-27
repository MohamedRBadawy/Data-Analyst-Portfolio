import React, { useState } from 'react';
import { TruckIcon, GearIcon, CartIcon, ScooterIcon, WrenchIcon } from '../constants';
import { industriesData, Industry } from '../data/content';
import Modal from './Modal';
import ScramblingHeading from './ScramblingHeading';
import InteractiveWorkflow from './InteractiveWorkflow';

const icons: { [key: string]: React.ReactElement } = {
    "Logistics": <TruckIcon />,
    "Manufacturing": <GearIcon />,
    "E-commerce": <CartIcon />,
    "Food Delivery": <ScooterIcon />,
    "Field Services": <WrenchIcon />,
};

const Industries: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

    const handleOpenModal = (industry: Industry) => {
        setSelectedIndustry(industry);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Delay clearing to allow for fade-out animation
        setTimeout(() => setSelectedIndustry(null), 300);
    };

    return (
        <section className="py-16 lg:py-20">
            <div className="text-center mb-16">
                <ScramblingHeading text="Expertise Across Industries" />
                <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">Applying data principles to solve industry-specific challenges.</p>
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
                {industriesData.map(industry => (
                    <button 
                        key={industry.name} 
                        onClick={() => handleOpenModal(industry)}
                        className="group holographic-panel flex flex-col items-center p-4 sm:p-6 rounded-xl text-center focus:outline-none focus:ring-2 focus:ring-brand-accent"
                    >
                        <div className="text-brand-cta mb-4 w-10 h-10 sm:w-12 sm:h-12">{icons[industry.name]}</div>
                        <h3 className="font-poppins font-bold text-md sm:text-lg mb-4">{industry.name}</h3>
                        <div className="text-sm">
                            <p className="text-brand-chaos mb-1 transition-opacity duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100 group-focus:opacity-100">{industry.chaos}</p>
                            <p className="text-brand-text-secondary">↓</p>
                            <p className="text-brand-clarity mt-1 transition-opacity duration-300 opacity-100 lg:opacity-0 group-hover:opacity-100 group-focus:opacity-100">{industry.clarity}</p>
                        </div>
                    </button>
                ))}
            </div>

            {selectedIndustry && (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} title={`${selectedIndustry.name} Workflow Transformation`}>
                   <div className="flex flex-col lg:flex-row gap-8 items-center">
                        <div className="lg:w-1/2">
                            <h4 className="font-poppins font-bold text-brand-text-primary mb-2 text-center lg:text-left text-h4">Common Workflow Bottlenecks</h4>
                            <InteractiveWorkflow workflow={selectedIndustry.workflow} />
                        </div>
                        <div className="w-full lg:w-1/2">
                            <h4 className="font-poppins font-bold text-brand-text-primary mb-4 text-center lg:text-left text-h4">My Approach for {selectedIndustry.name}</h4>
                            <div className="space-y-4">
                                {selectedIndustry.myApproach.map((item, index) => (
                                    <div key={index} className="bg-brand-bg/50 p-4 rounded-lg border border-brand-border">
                                        <h5 className="font-bold text-brand-accent">{item.title}</h5>
                                        <p className="text-sm text-brand-text-secondary">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </section>
    );
};

export default Industries;