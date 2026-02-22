import './ProjectsModal.scss';
import ProjectCard from '../ProjectCard/ProjectCard';

const chevronLeft = '/src/assets/icons/chevron-left-solid-full.svg';
const chevronRight = '/src/assets/icons/chevron-right-solid-full.svg';
const closeIcon = '/src/assets/icons/xmark-solid-full.svg';

const getIconStyle = (icon) => ({
    maskImage: `url(${icon})`
});

export default function ProjectsModal({
    isOpen,
    category,
    projectsById,
    content,
    onClose,
    onPrev,
    onNext
}) {
    if (!isOpen || !category) {
        return null;
    }

    return (
        <div className='projects__modal' role='dialog' aria-modal='true' onClick={onClose}>
            <div className='projects__modal-content' onClick={(event) => event.stopPropagation()}>
                <header className='projects__modal-header'>
                    <button type='button' className='projects__modal-nav projects__modal-nav--prev' onClick={onPrev}>
                        <span
                            className='projects__modal-chevron-icon'
                            style={getIconStyle(chevronLeft)}
                            aria-hidden='true'
                        />
                    </button>
                    <div className='projects__modal-heading'>
                        <span
                            className={`projects__card-icon projects__card-icon--${category.iconClass}`}
                            style={getIconStyle(category.icon)}
                            aria-hidden='true'
                        />
                        <h3 className='projects__modal-title'>{category.title}</h3>
                    </div>
                    <button type='button' className='projects__modal-nav projects__modal-nav--next' onClick={onNext}>
                        <span
                            className='projects__modal-chevron-icon'
                            style={getIconStyle(chevronRight)}
                            aria-hidden='true'
                        />
                    </button>
                    <button type='button' className='projects__modal-close' onClick={onClose}>
                        <span
                            className='projects__modal-close-icon'
                            style={getIconStyle(closeIcon)}
                            aria-hidden='true'
                        />
                    </button>
                </header>

                <div className='projects__modal-body'>
                    {category.projects.map((projectId) => (
                        <ProjectCard
                            key={projectId}
                            project={projectsById[projectId]}
                            projectText={content.cards[projectId]}
                            codeSourceLabel={content.codeSourceLabel}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
