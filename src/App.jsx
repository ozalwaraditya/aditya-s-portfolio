import './App.css'
import Header from "./components/Header"
import About from './pages/About'
import Home from './pages/Home'
import Skiils from './pages/Skills'

const App = () => {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
        <Skiils/>
      </main>
    </>
  )
}

export default App