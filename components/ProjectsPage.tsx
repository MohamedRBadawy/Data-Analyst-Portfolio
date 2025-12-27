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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { setIsHovering } = useInteraction();
    
    // Find the corresponding case study to link to the detail page
    const caseStudy = caseStudies.find(cs => cs.title === project.title);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!caseStudy) {
            e.preventDefault();
            // Optionally, handle projects without a detail page, e.g., open project.url
        }
        // The click will be handled by the parent anchor if a case study exists
    };

    return (
        <div 
            onClick={handleClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group holographic-panel rounded-xl overflow-hidden flex flex-col cursor-pointer h-full"
        >
            <div className="overflow-hidden h-48 bg-brand-bg">
                {project.image.endsWith('.mp4') ? (
                    <video 
                        src={project.image} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-poppins text-xl font-bold mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                <p className="text-brand-text-secondary mb-4 flex-grow text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-brand-border/50">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-brand-border text-xs rounded-full font-medium text-brand-text-secondary">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
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
    
    return (
        <div className="min-h-screen">
             <div className="max-w-7xl mx-auto">
                <div id="featured">
                    <CaseStudies showProjectDetailPage={showProjectDetailPage} />
                </div>
                
                <div id="archive" className="pt-16">
                    <div className="text-center mb-12">
                        <ScramblingHeading text="Full Project Archive" />
                        <p className="text-xl text-brand-text-secondary mt-4 max-w-3xl mx-auto">A complete collection of dashboards, automations, and tools I've built. Use the filters to explore my work.</p>
                    </div>

                    {/* Filters */}
                    <div className="mb-12 p-6 holographic-panel rounded-lg">
                        <div className="relative flex-grow mb-4">
                            <input
                                type="text"
                                placeholder="Search projects by title or description..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full p-4 pl-12 bg-brand-bg border border-brand-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent text-brand-text-primary"
                            />
                            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-brand-text-secondary" size={24} />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button 
                                onClick={() => setSelectedTag(null)}
                                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === null ? 'bg-brand-accent text-brand-bg' : 'bg-brand-border/50 hover:bg-brand-border text-brand-text-primary'}`}
                            >
                                All Projects
                            </button>
                            {allTags.map(tag => (
                                <button 
                                    key={tag}
                                    onClick={() => setSelectedTag(tag)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${selectedTag === tag ? 'bg-brand-accent text-brand-bg' : 'bg-brand-border/50 hover:bg-brand-border text-brand-text-primary'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.length > 0 ? filteredProjects.map(project => {
                            const caseStudy = caseStudies.find(cs => cs.title === project.title);
                            return caseStudy ? (
                                <div key={project.title} onClick={() => showProjectDetailPage(caseStudy)}>
                                    <ProjectCard project={project} />
                                </div>
                            ) : (
                                <ProjectCard key={project.title} project={project} />
                            );
                        }) : (
                            <div className="md:col-span-2 lg:col-span-3 text-center py-16 holographic-panel rounded-lg">
                                <p className="text-xl text-brand-text-secondary">No projects found for this query.</p>
                                <p className="text-sm text-brand-text-secondary/70 mt-2">Try a different search or filter.</p>
                            </div>
                        )}
                    </div>
                </div>

             </div>
        </div>
    );
};

export default ProjectsPage;