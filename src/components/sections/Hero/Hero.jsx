import content from '../../../i18n/fr.json';
import profilePhoto from '../../../assets/images/profile/profile-photo.webp';
import './Hero.scss';

export default function Hero() {
    return (
        <section id="hero" className="app__section">
            <header>
                <h1 id="hero-title">{content.hero.name}</h1>
                <h2>{content.hero.title}</h2>
                {content.hero.intro.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </header>
            <figure>
                <img src={profilePhoto} alt="Nicolas Grignard" />
            </figure>
        </section>
    );
}
