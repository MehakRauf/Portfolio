import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Portfolio from './pages/Portfolio/Portfolio'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'


function App() {
  return (
    <div>
       <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
