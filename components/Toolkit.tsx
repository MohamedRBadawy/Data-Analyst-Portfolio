import React, { useState } from 'react';
import ScramblingHeading from './ScramblingHeading';
import { toolkitData } from '../data/content';
import Modal from './Modal';
import { CodeIcon } from '../constants';
import CodeHighlight from './CodeHighlight';

type Tab = 'dashboards' | 'process' | 'code';

const Toolkit: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('dashboards');
    const [currentDashboard, setCurrentDashboard] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCode, setSelectedCode] = useState<{ title: string; code: string } | null>(null);

    const handleNextDashboard = () => {
        setCurrentDashboard((prev) => (prev + 1) % toolkitData.dashboards.length);
    };

    const handlePrevDashboard = () => {
        setCurrentDashboard((prev) => (prev - 1 + toolkitData.dashboards.length) % toolkitData.dashboards.length);
    };

    const handleViewCode = (project: typeof toolkitData.codeProjects[0]) => {
        setSelectedCode({ title: project.title, code: project.code });
        setIsModalOpen(true);
    };

    const activeDashboard = toolkitData.dashboards[currentDashboard];

    return (
        <section className="py-20 px-8 lg:px-16 bg-brand-surface border-y border-brand-border">
            <div className="text-center mb-12">
                <ScramblingHeading text="My Toolkit" />
                <p className="text-lg text-brand-text/80 mt-2 max-w-3xl mx-auto">A closer look at the tools I build, the process I follow, and the code I write to deliver clarity.</p>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Tab Navigation */}
                <div className="flex justify-center border-b border-brand-border mb-8">
                    {(['dashboards', 'process', 'code'] as Tab[]).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 font-poppins font-bold text-lg capitalize transition-colors duration-300 relative ${activeTab === tab ? 'text-brand-accent' : 'text-brand-text/60 hover:text-white'}`}
                        >
                            {tab}
                            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent animate-pulse-right" style={{transformOrigin: 'left'}}/>}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="min-h-[500px]">
                    {activeTab === 'dashboards' && (
                        <div className="animate-fade-in-scale-up">
                            <div className="flex flex-col lg:flex-row gap-8 items-center bg-brand-bg p-8 rounded-xl border border-brand-border">
                                <div className="lg:w-3/5 w-full">
                                    <img src={activeDashboard.image} alt={activeDashboard.title} className="rounded-lg shadow-2xl w-full h-auto object-cover border-2 border-brand-border" />
                                </div>
                                <div className="lg:w-2/5 w-full">
                                    <h3 className="font-poppins text-3xl font-bold text-brand-process mb-4">{activeDashboard.title}</h3>
                                    <p className="text-brand-text/90 mb-4">{activeDashboard.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {activeDashboard.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-brand-border text-sm rounded-full font-medium text-brand-text/80">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button onClick={handlePrevDashboard} className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-brand-border transition-colors" aria-label="Previous dashboard">‹ Prev</button>
                                        <span className="font-roboto-mono text-sm">{currentDashboard + 1} / {toolkitData.dashboards.length}</span>
                                        <button onClick={handleNextDashboard} className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-brand-border transition-colors" aria-label="Next dashboard">Next ›</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'process' && (
                        <div className="animate-fade-in-scale-up">
                            <div className="relative pl-12">
                                <div className="absolute top-0 left-4 w-1 h-full bg-brand-border rounded-full" />
                                {toolkitData.process.map((item, index) => (
                                    <div key={item.step} className="mb-12 relative">
                                        <div className="absolute -left-8 top-1.5 w-8 h-8 bg-brand-accent text-white rounded-full flex items-center justify-center ring-8 ring-brand-surface">
                                            {item.icon}
                                        </div>
                                        <div className="p-6 bg-brand-bg border border-brand-border rounded-xl ml-6">
                                            <h4 className="font-poppins text-xl font-bold text-brand-clarity mb-2">{item.step}. {item.title}</h4>
                                            <p className="text-brand-text/80">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'code' && (
                        <div className="animate-fade-in-scale-up grid grid-cols-1 md:grid-cols-2 gap-8">
                            {toolkitData.codeProjects.map(project => (
                                <div key={project.title} className="bg-brand-bg border border-brand-border rounded-xl p-6 flex flex-col">
                                    <div className="flex items-center mb-3">
                                        <CodeIcon className="w-6 h-6 text-brand-cta mr-3" size={24}/>
                                        <h4 className="font-poppins text-xl font-bold">{project.title}</h4>
                                    </div>
                                    <p className="text-brand-text/80 mb-4 flex-grow">{project.description}</p>
                                    <button onClick={() => handleViewCode(project)} className="mt-auto self-start bg-brand-cta text-white font-bold font-poppins py-2 px-6 rounded-lg hover:bg-opacity-90 transform transition-all hover:scale-105">
                                        View Code
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {selectedCode && (
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={selectedCode.title}>
                    <CodeHighlight code={selectedCode.code} />
                </Modal>
            )}
        </section>
    );
};

export default Toolkit;