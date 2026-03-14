import './App.css'
import Home from './Pages/Home'
import Nav from './shared/Navbar'
import ScrollButton from './shared/ScrollButton'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  
  return (
    <div>
      <Nav />
      <div id="home">
        <Home />
      </div>
      <ScrollButton/>
    </div>
  )
}

export default App
