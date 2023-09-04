import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Environments from './components/Environments'
import Wrapper from './components/Wrapper'

function App() {
    return (
        <>
            <Navbar />
            <Wrapper>
                <Landing />
                <Environments />
            </Wrapper>
        </>
    )
}

export default App
