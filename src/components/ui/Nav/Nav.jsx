import './Nav.scss';

export default function Nav() {
    return (
        <nav className='app__nav'>
            <a href='#hero'>Accueil</a>
            <span className='app__nav-separator'>|</span>
            <a href='#approach'>A propos</a>
            <span className='app__nav-separator'>|</span>
            <a href='#projects'>Mes réalisations</a>
            <span className='app__nav-separator'>|</span>
            <a href='#skills'>Skills</a>
            <span className='app__nav-separator'>|</span>
            <a href='#contact'>Contact</a>
            <span className='app__nav-separator'>–</span>
            <button className='app__nav-button' type='button'>FR</button>
            <span className='app__nav-separator'>|</span>
            <button className='app__nav-button' type='button'>EN</button>
            <span className='app__nav-separator'>–</span>
            <button className='app__nav-button' type='button'>🌞</button>
            <span className='app__nav-separator'>|</span>
            <button className='app__nav-button' type='button'>🌚</button>
            <span className='app__nav-separator'>–</span>
            <button className='app__nav-button' type='button'>🌞</button>
            <span className='app__nav-separator'>|</span>
            <button className='app__nav-button' type='button'>🌙</button>
            <span className='app__nav-separator'>-</span>
            <button className='app__nav-button' type='button'>☀️</button>
            <span className='app__nav-separator'>|</span>
            <button className='app__nav-button' type='button'>🌒</button>
        </nav>
    );
}
