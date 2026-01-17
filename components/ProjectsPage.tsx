import React, { useState, useMemo } from 'react';
import { projectsData, Project, CaseStudy, caseStudies } from '../data/content';
import { useInteraction } from '../context/InteractionContext';
import ScramblingHeading from './ScramblingHeading';
import { SearchIcon } from '../constants';
import CaseStudies from './CaseStudies';

interface ProjectsPageProps {
    showMainPage: () => void;
    showProjectDetailPage: (study: CaseStudy) => void;
}

const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags)));

interface ProjectCardProps {
    project: Project;
    onViewDetails?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
    const { setIsHovering } = useInteraction();

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
        if ((e.key === 'Enter' || e.key === ' ') && onViewDetails) {
            e.preventDefault();
            onViewDetails();
        }
    };

    return (
        <button
            onClick={onViewDetails}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group holographic-panel rounded-lg overflow-hidden flex flex-col cursor-pointer h-full w-full text-left focus:outline-none focus:ring-2 focus:ring-signal-info focus:ring-offset-2 focus:ring-offset-ops-bg transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
            aria-label={`View details for ${project.title}`}
        >
            <div className="overflow-hidden h-48 bg-ops-surface">
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
                <h3 className="font-sans text-lg font-bold mb-2 group-hover:text-signal-info transition-colors">{project.title}</h3>
                <p className="text-ops-text-secondary mb-4 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-ops-border/50">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-ops-surface border border-ops-border/50 text-xs rounded-full font-medium text-ops-text-secondary">{tag}</span>
                    ))}
                </div>
            </div>
        </button>
    );
};


const ProjectsPage: React.FC<ProjectsPageProps> = ({ showProjectDetailPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredProjects = useMemo(() => {
        return projectsData.filter(project => {
            const searchMatch = searchTerm === '' ||
                project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());
            const tagMatch = selectedTag === null || project.tags.includes(selectedTag);
            return searchMatch && tagMatch;
        });
    }, [searchTerm, selectedTag]);

    const handleArchiveClick = () => {
        const archiveElement = document.getElementById('archive');
        if (archiveElement) {
            archiveElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div id="featured">
                    <CaseStudies showProjectDetailPage={showProjectDetailPage} />
                </div>

                <div id="archive" className="pt-16">
                    <div className="text-center mb-12">
                        <button
                            onClick={handleArchiveClick}
                            className="cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-signal-info focus:ring-offset-2 focus:ring-offset-ops-bg rounded-lg p-2"
                            aria-label="Full Project Archive"
                        >
                            <ScramblingHeading text="Full Project Archive" />
                        </button>
                        <p className="text-sm text-ops-text-secondary mt-4 max-w-3xl mx-auto leading-relaxed">A complete collection of dashboards, automations, and tools I've built. Use the filters to explore my work.</p>
                    </div>

                </div>

                <div className="mb-12 p-6 holographic-panel rounded-lg">
                    <div className="relative flex-grow mb-4">
                        <input
                            type="text"
                            placeholder="Search projects by title or description..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-4 pl-12 bg-ops-bg border border-ops-border rounded-lg focus:outline-none focus:ring-2 focus:ring-signal-info text-ops-text-primary"
                        />
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-ops-text-secondary" size={24} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === null ? 'bg-signal-info text-ops-bg' : 'bg-ops-surface hover:bg-ops-border text-ops-text-primary'}`}
                        >
                            All Projects
                        </button>
                        {allTags.map(tag => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-signal-info text-ops-bg' : 'bg-ops-surface hover:bg-ops-border text-ops-text-primary'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>


            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--space-xl)]">
                {filteredProjects.length > 0 ? filteredProjects.map(project => {
                    const caseStudy = project.caseStudyId
                        ? caseStudies.find(cs => cs.id === project.caseStudyId)
                        : null;
                    return (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            onViewDetails={caseStudy ? () => showProjectDetailPage(caseStudy) : undefined}
                        />
                    );
                }) : (
                    <div className="md:col-span-2 lg:col-span-3 text-center py-16 holographic-panel rounded-lg">
                        <p className="text-xl text-ops-text-secondary">No projects found for this query.</p>
                        <p className="text-sm text-ops-text-secondary/70 mt-2">Try a different search or filter.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectsPage;
