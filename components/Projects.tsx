
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
                <div className="text-center mb-16">
                    <ScramblingHeading text="Featured Projects" />
                    <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">A selection of projects demonstrating real business impact.</p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xl)]">
                    {featuredProjects.map(project => (
                        <div
                            key={project.title}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            className="group holographic-panel rounded-xl overflow-hidden flex flex-col cursor-pointer border border-brand-border/50 hover:border-brand-accent transition-colors"
                        >
                            <div className="overflow-hidden h-56 bg-brand-bg relative">
                                {/* Overlay to ensure text pops if image is bright - though images seem handled by object-cover */}
                                {project.image.endsWith('.mp4') ? (
                                    <video
                                        src={project.image}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                                    />
                                ) : (
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102" />
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                {project.roi && (
                                    <div className="mb-4">
                                        <span className="inline-block bg-brand-cta text-brand-bg font-bold px-3 py-1 rounded text-sm uppercase tracking-wide shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                                            {project.roi}
                                        </span>
                                    </div>
                                )}
                                <h3 className="font-poppins text-2xl font-bold mb-3 text-brand-text-primary group-hover:text-brand-accent transition-colors">{project.title}</h3>
                                <p className="text-brand-text-secondary mb-6 flex-grow text-base leading-relaxed">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand-border/50">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 bg-brand-border/30 border border-brand-border/50 text-xs rounded-full font-medium text-brand-text-secondary">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <button
                        onClick={showAllProjects}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        className="inline-flex items-center px-6 py-3 bg-brand-bg/60 backdrop-blur-xl border border-brand-accent/20 rounded-full text-[10px] sm:text-xs font-roboto-mono font-bold uppercase tracking-[0.15em] text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-accent/10 hover:border-brand-accent/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group"
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

