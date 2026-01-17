import { aboutData } from './profile';
import { caseStudies, CaseStudy } from './caseStudies';
import { servicesData, ServiceCategory, ServiceItem, problems, Problem, toolkitData, industriesData, Industry, Workflow, serviceComparisonData, ComparisonFeature } from './services';
import { experienceData, milestones, WorkExperience, ContributionCategory } from './experience';
import { projectsData, Project } from './projects';
import { blogPosts, BlogPost } from './blog';
import { testimonials, trustedBy } from './testimonials';

export {
    aboutData,
    caseStudies,
    servicesData,
    experienceData,
    projectsData,
    blogPosts,
    testimonials,
    trustedBy,
    milestones,
    problems,
    toolkitData,
    industriesData,
    serviceComparisonData
};

export type {
    CaseStudy,
    ServiceCategory,
    ServiceItem,
    Problem,
    WorkExperience,
    ContributionCategory,
    Project,
    BlogPost,
    Industry,
    Workflow,
    ComparisonFeature
};