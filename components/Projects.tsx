
import React from 'react';
import { projectsData } from '../data/content';
import ScramblingHeading from './ScramblingHeading';
import { useInteraction } from '../context/InteractionContext';

interface ProjectsProps {
    showAllProjects: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ showAllProjects }) => {
    const { setIsHovering } = useInteraction();
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section className="py-[var(--space-3xl)] px-[var(--space-lg)]">
            <div className="content-container">
                <div className="text-center mb-20">
                    <ScramblingHeading text="Featured Projects" />
                    <p className="text-xl text-ops-text-secondary mt-6 max-w-3xl mx-auto leading-relaxed">A selection of projects demonstrating real business impact.</p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xl)]">
                    {featuredProjects.map(project => (
                        <div
                            key={project.title}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="group holographic-panel rounded-xl overflow-hidden flex flex-col cursor-pointer border border-ops-border/40 hover:border-signal-info/60 smooth-transition shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(3,105,161,0.25)] hover:-translate-y-3 card-hover"
                        >
                            <div className="overflow-hidden h-56 bg-ops-surface relative">
                                {project.image.endsWith('.mp4') ? (
                                    <video
                                        src={project.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                )}
                            </div>
                            <div className="p-7 flex flex-col flex-grow relative">
                                {/* Gradient Overlay for depth */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ops-surface/5 pointer-events-none" />
                                {project.roi && (
                                    <div className="mb-4">
                                        <span className="inline-block bg-signal-success text-white font-bold px-3 py-1.5 rounded-md text-xs uppercase tracking-wide shadow-lg shadow-signal-success/30">
                                            {project.roi}
                                        </span>
                                    </div>
                                )}
                                <h3 className="font-sans text-2xl font-bold mb-3 text-ops-text-primary group-hover:text-signal-info transition-colors tracking-tight">{project.title}</h3>
                                <p className="text-ops-text-secondary mb-8 flex-grow text-base leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-ops-border">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-ops-surface/80 border border-ops-border/30 text-xs rounded-full font-medium text-ops-text-tertiary group-hover:text-ops-text-primary transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-20">
                    <button
                        onClick={showAllProjects}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-flex items-center px-6 py-3 bg-ops-bg/60 backdrop-blur-xl border border-signal-info/20 rounded-full text-sm font-roboto-mono font-bold uppercase tracking-[0.12em] text-ops-text-secondary hover:text-ops-text-primary hover:bg-signal-info/10 hover:border-signal-info/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
                    >
                        View All Projects
                        <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;

