import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Environments from './components/Environments'
import Wrapper from './components/Wrapper'
import Extraordinary from './components/Extraordinary'
import Dreams from './components/Dreams'

function App() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Landing />
                <Environments />
                <Extraordinary />
                <Dreams/>
            </Wrapper>
        </>
    )
}

export default App
