import './ProjectCategoryCard.scss';

export default function ProjectCategoryCard({ category, onOpen }) {
    const handleClick = () => {
        onOpen(category.id);
    };

    const iconStyle = {
        maskImage: `url("${category.icon}")`,
        WebkitMaskImage: `url("${category.icon}")`,
    };

    return (
        <article className="projects__card">
            <button
                type="button"
                className="projects__card-button"
                onClick={handleClick}
            >
                <div className="projects__card-body">
                    <div className="projects__card-heading">
                        <span
                            className={`projects__card-icon projects__card-icon--${category.iconClass}`}
                            style={iconStyle}
                            aria-hidden="true"
                        />
                        <h3 className="projects__card-title">
                            {category.title}
                        </h3>
                    </div>
                    <p className="projects__card-description">
                        {category.description}
                    </p>
                </div>
                <figure className="projects__card-media">
                    <img
                        className="projects__card-image"
                        src={category.image}
                        alt={category.alt}
                    />
                </figure>
            </button>
        </article>
    );
}
