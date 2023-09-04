import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Environments from './components/Environments'
import Wrapper from './components/Wrapper'
import Extraordinary from './components/Extraordinary'

function App() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Landing />
                <Environments />
                <Extraordinary />
            </Wrapper>
        </>
    )
}

export default App
