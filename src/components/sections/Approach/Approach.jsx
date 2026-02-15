import './Approach.scss';
import content from '../../../i18n/fr.json';
import diagramme from '../../../assets/icons/image_diagramme_blanc_pour_fond_fonce.webp';
import processus from '../../../assets/icons/image_processus_blanc_pour_fond_fonce.webp';

export default function Approach() {
    const icons = [diagramme, processus];
    return (
        <section id='approach' className='app__section approach'>
            <header className='approach__header'>
                <h2 id='approach-title' className='approach__title'>{content.approach.title}</h2>
            </header>
            {content.approach.paragraphs.map((text, index) => (
                <article key={index} className='approach__item'>
                    <figure className='approach__icon'>
                        <img className='approach__icon-img' src={icons[index]} alt='' />
                    </figure>
                    <p className='approach__text'>{text}</p>
                </article>
            ))}
        </section>
    );
}
