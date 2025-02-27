import './App.css'
import Header from "./components/Header"
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header/>

      <main className='main'>
        <Home/>
      </main>
    </>
  )
}

export default App