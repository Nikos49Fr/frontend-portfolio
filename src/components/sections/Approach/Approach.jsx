import './Approach.scss';
import { useLanguage } from '../../../context/LanguageContext';
import diagramme from '../../../assets/icons/image_diagramme_blanc_pour_fond_fonce.webp';
import processus from '../../../assets/icons/image_processus_blanc_pour_fond_fonce.webp';

export default function Approach() {
    const { content } = useLanguage();
    const icons = [diagramme, processus];
    return (
        <section id="approach" className="app__section approach">
            <h2 className="approach__title">{content.approach.title}</h2>
            {content.approach.paragraphs.map((text, index) => (
                <article key={index} className="approach__item">
                    <img
                        className="approach__icon"
                        src={icons[index]}
                        alt=""
                    />
                    <p className="approach__text">{text}</p>
                </article>
            ))}
        </section>
    );
}
