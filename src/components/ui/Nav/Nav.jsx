import './Nav.scss';
import { useLanguage } from '../../../context/LanguageContext';

const homeIcon = '/src/assets/icons/house-solid-full.svg';
const compassIcon = '/src/assets/icons/compass-solid-full.svg';
const folderIcon = '/src/assets/icons/folder-open-solid-full.svg';
const wrenchIcon = '/src/assets/icons/wrench-solid-full.svg';
const envelopeIcon = '/src/assets/icons/envelope-solid-full.svg';

const getIconStyle = (icon) => ({
    maskImage: `url(${icon})`
});

export default function Nav() {
    const { lang, setLang, content } = useLanguage();
    const navAnchors = ['hero', 'approach', 'projects', 'skills', 'contact'];
    const navIcons = [
        homeIcon,
        compassIcon,
        folderIcon,
        wrenchIcon,
        envelopeIcon
    ];
    const navItems = content.nav.items ?? [];

    return (
        <nav className='app__nav'>
            <div className='app__nav-inner'>
                <ul className='app__nav-list'>
                    {navItems.map((label, index) => {
                        const anchor = navAnchors[index] ?? '';
                        const icon = navIcons[index] ?? null;
                        return (
                            <li className='app__nav-item' key={anchor || index}>
                                <a className='app__nav-link' href={`#${anchor}`}>
                                    {icon ? (
                                        <span
                                            className='app__nav-icon'
                                            style={getIconStyle(icon)}
                                            aria-hidden='true'
                                        />
                                    ) : null}
                                    <span className='app__nav-link-text'>
                                        {label}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                    <li className='app__nav-item app__nav-item--lang'>
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
                                <span className='sr-only'>Langue</span>
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
                    </li>
                </ul>
            </div>
        </nav>
    );
}
