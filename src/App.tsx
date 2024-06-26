import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Environments from './components/Environments'
import Wrapper from './components/Wrapper'
import Extraordinary from './components/Extraordinary'
import Dreams from './components/Dreams'
import Endorsements from './components/Endorsements'
import Transform from './components/Transform'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

function App() {
    gsap.registerPlugin(ScrollTrigger);
    return (
        <>
            <Navbar />
            <Wrapper>
                <Landing />
                <Environments />
                <Extraordinary />
                <Dreams />
                <Endorsements />
                <Transform />
            </Wrapper>
        </>
    )
}

export default App
