import './App.css'
import Header from "./components/Header"
import About from './pages/About'
import Home from './pages/Home'
import Qualification from './pages/Qualification'
import Skills from './pages/Skills'

const App = () => {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
        <Qualification/>
      </main>
    </>
  )
}

export default App