import './App.css'
import Header from "./components/Header"
import About from './pages/About'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
        <About/>
      </main>
    </>
  )
}

export default App