import { useLanguage } from '../../../context/LanguageContext';
import profilePhoto from '../../../assets/images/profile/profile-photo.webp';
import './Hero.scss';

export default function Hero() {
    const { content } = useLanguage();
    return (
        <section id="hero" className="app__section">
            <header>
                <h1 id="hero-title" className="hero__name">{content.hero.name}</h1>
                <h2 className="hero__title">{content.hero.title}</h2>
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
