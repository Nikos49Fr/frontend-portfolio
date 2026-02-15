import Nav from './components/ui/Nav/Nav';
import Approach from './components/sections/Approach/Approach';
import Contact from './components/sections/Contact/Contact';
import Hero from './components/sections/Hero/Hero';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';

function App() {
    return (
        <div className='app'>
            <Nav />
            <main className='app__main'>
                <Hero />
                <Approach />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
}

export default App;
