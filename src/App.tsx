
import './App.css'
import Navbar from './components/ui/navbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/skills" element={<Skills/>} />
      </Routes>
    </>
  )
}

export default App
