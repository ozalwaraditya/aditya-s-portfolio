import './App.css'
import Header from "./components/Header"
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
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
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}

export default App