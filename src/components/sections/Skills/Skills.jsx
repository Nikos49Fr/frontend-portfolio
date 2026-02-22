import './Skills.scss';
import { useLanguage } from '../../../context/LanguageContext';
import SkillCard from '../../ui/SkillCard/SkillCard';

export default function Skills() {
    const { content } = useLanguage();
    return (
        <section id='skills' className='app__section skills'>
            <header className='skills__header'>
                <h2 id='skills-title' className='skills__title'>{content.skills.title}</h2>
                {content.skills.intro.map((text, index) => (
                    <p className="skills__intro" key={index}>
                        {text}
                    </p>
                ))}
            </header>
            <div className='skills__grid'>
                {content.skills.blocks.map((block, index) => (
                    <SkillCard key={index} title={block.title} items={block.items} />
                ))}
            </div>
        </section>
    );
}
