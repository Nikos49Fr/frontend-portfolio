import './ProjectCard.scss';
const githubIcon = '/src/assets/icons/github-brands-solid-full.svg';

const getIconStyle = (icon) => ({
    maskImage: `url(${icon})`,
});

export default function ProjectCard({ project, projectText, codeSourceLabel }) {
    if (!project || !projectText) {
        return null;
    }

    const tags = projectText.tags ?? [];
    const paragraphs = projectText.description ?? [];
    const imageSrc = project.image ?? '';

    return (
        <article className="projects__project-card">
            {imageSrc ? (
                <figure className="projects__project-media">
                    <img
                        className="projects__project-image"
                        src={imageSrc}
                        alt=""
                    />
                </figure>
            ) : null}
            <div className="projects__project-body">
                <h4 className="projects__project-title">{projectText.title}</h4>
                <div className="projects__project-description">
                    {paragraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
                <div className="projects__project-footer">
                    <ul className="projects__project-tags">
                        {tags.map((tag, index) => (
                            <li key={index} className="projects__project-tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    {project.repoUrl ? (
                        <a
                            className="projects__project-link"
                            href={project.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="code-label">
                                {codeSourceLabel}
                            </span>
                            <span
                                className="projects__project-link-icon"
                                style={getIconStyle(githubIcon)}
                                aria-hidden="true"
                            />
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
