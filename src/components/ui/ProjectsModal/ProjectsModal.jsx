import { useEffect, useRef } from 'react';
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
    onNext,
    returnFocusRef
}) {
    const modalRef = useRef(null);
    const closeButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {
            return;
        }
        if (closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
        return () => {
            const target = returnFocusRef?.current;
            if (target && typeof target.focus === 'function') {
                target.focus();
            }
        };
    }, [isOpen, returnFocusRef]);

    if (!isOpen || !category) {
        return null;
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
            onClose();
            return;
        }

        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            onPrev();
            if (prevButtonRef.current) {
                prevButtonRef.current.focus();
            }
            return;
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            onNext();
            if (nextButtonRef.current) {
                nextButtonRef.current.focus();
            }
            return;
        }

        if (event.key !== 'Tab') {
            return;
        }

        const container = modalRef.current;
        if (!container) {
            return;
        }
        const focusableSelectors = [
            'button:not([disabled])',
            'a[href]',
            'input:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ];
        const focusable = container.querySelectorAll(focusableSelectors.join(','));
        if (!focusable.length) {
            event.preventDefault();
            return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
            if (document.activeElement === first) {
                event.preventDefault();
                last.focus();
            }
        } else if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    return (
        <div className='projects__modal' role='dialog' aria-modal='true' onClick={onClose}>
            <div
                className='projects__modal-content'
                onClick={(event) => event.stopPropagation()}
                onKeyDown={handleKeyDown}
                ref={modalRef}
            >
                <header className='projects__modal-header'>
                    <button
                        type='button'
                        className='projects__modal-nav projects__modal-nav--prev'
                        onClick={onPrev}
                        ref={prevButtonRef}
                    >
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
                    <button
                        type='button'
                        className='projects__modal-nav projects__modal-nav--next'
                        onClick={onNext}
                        ref={nextButtonRef}
                    >
                        <span
                            className='projects__modal-chevron-icon'
                            style={getIconStyle(chevronRight)}
                            aria-hidden='true'
                        />
                    </button>
                    <button
                        type='button'
                        className='projects__modal-close'
                        onClick={onClose}
                        ref={closeButtonRef}
                    >
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
