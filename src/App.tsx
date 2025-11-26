
import './App.css'
import Navbar from './components/ui/navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Portfolio from './pages/Portfolio';
import Footer from './components/ui/footer';
import { Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
    <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/skills" element={<Skills/>} />
         <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
