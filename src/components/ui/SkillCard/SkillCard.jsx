import { useState } from 'react';
import './SkillCard.scss';

export default function SkillCard({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <article className={`skills__card${isOpen ? ' is-open' : ''}`}>
            <button type='button' className='skills__card-button' onClick={handleToggle}>
                <div className='skills__card-content'>
                    <ul className='skills__card-list'>
                        {items.map((item, index) => (
                            <li key={index} className='skills__card-item'>{item}</li>
                        ))}
                    </ul>
                </div>
                <span className='skills__card-door' aria-hidden='true'>
                    <span className='skills__card-door-title'>{title}</span>
                </span>
            </button>
        </article>
    );
}
