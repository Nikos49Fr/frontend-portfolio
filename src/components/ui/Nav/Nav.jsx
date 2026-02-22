import './Nav.scss';
import { useLanguage } from '../../../context/LanguageContext';

export default function Nav() {
    const { lang, setLang, content } = useLanguage();
    const navAnchors = ['hero', 'approach', 'projects', 'skills', 'contact'];
    const navItems = content.nav.items ?? [];

    return (
        <nav className='app__nav'>
            <div className='app__nav-inner'>
                <ul className='app__nav-list'>
                    {navItems.map((label, index) => {
                        const anchor = navAnchors[index] ?? '';
                        return (
                            <li className='app__nav-item' key={anchor || index}>
                                <a className='app__nav-link' href={`#${anchor}`}>
                                    {label}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <div className='app__nav-lang'>
                    <button
                        className='app__nav-lang-label'
                        type='button'
                        onClick={() => setLang('fr')}
                    >
                        fr
                    </button>
                    <label
                        className={`app__nav-lang-toggle app__nav-lang-toggle--${lang}`}
                    >
                        <input
                            className='app__nav-lang-input'
                            type='checkbox'
                            checked={lang === 'en'}
                            onChange={(event) =>
                                setLang(event.target.checked ? 'en' : 'fr')
                            }
                        />
                        <span className='app__nav-lang-track'>
                            <span className='app__nav-lang-thumb' />
                        </span>
                    </label>
                    <button
                        className='app__nav-lang-label'
                        type='button'
                        onClick={() => setLang('en')}
                    >
                        en
                    </button>
                </div>
            </div>
        </nav>
    );
}
