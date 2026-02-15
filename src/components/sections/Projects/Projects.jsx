import { useState } from 'react';
import './Projects.scss';
import content from '../../../i18n/fr.json';
import realisations from '../../../data/realisations.json';
import projects from '../../../data/projects.json';
import ProjectCategoryCard from '../../ui/ProjectCategoryCard/ProjectCategoryCard';
import ProjectsModal from '../../ui/ProjectsModal/ProjectsModal';


export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const categories = Object.entries(realisations).map(([id, item]) => {
        const categoryContent = content.projects.categories[id] ?? {};
        return {
            id,
            title: categoryContent.title ?? '',
            description: categoryContent.description ?? '',
            alt: categoryContent.alt ?? '',
            image: item.image,
            icon: item.icon,
            iconClass: item.iconClass,
            projects: item.projects ?? [],
        };
    });

    const categoryIds = categories.map((category) => category.id);

    const handleOpen = (categoryId) => {
        setActiveCategoryId(categoryId);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    const handlePrev = () => {
        if (!activeCategoryId) {
            return;
        }
        const currentIndex = categoryIds.indexOf(activeCategoryId);
        const prevIndex =
            currentIndex === 0 ? categoryIds.length - 1 : currentIndex - 1;
        setActiveCategoryId(categoryIds[prevIndex]);
    };

    const handleNext = () => {
        if (!activeCategoryId) {
            return;
        }
        const currentIndex = categoryIds.indexOf(activeCategoryId);
        const nextIndex =
            currentIndex === categoryIds.length - 1 ? 0 : currentIndex + 1;
        setActiveCategoryId(categoryIds[nextIndex]);
    };

    const activeCategory = categories.find(
        (category) => category.id === activeCategoryId,
    );

    return (
        <section id='projects' className='app__section projects'>
            <header className='projects__header'>
                <h2 id='projects-title' className='projects__title'>
                    {content.projects.title}
                </h2>
                <p className='projects__intro'>{content.projects.intro}</p>
            </header>

            <div className='projects__grid'>
                {categories.map((category) => (
                    <ProjectCategoryCard
                        key={category.id}
                        category={category}
                        onOpen={handleOpen}
                    />
                ))}
            </div>

            <ProjectsModal
                isOpen={isModalOpen}
                category={activeCategory}
                categories={categories}
                projectsById={projects}
                content={content.projects}
                onClose={handleClose}
                onPrev={handlePrev}
                onNext={handleNext}
            />
        </section>
    );
}
