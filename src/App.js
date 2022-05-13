
import './App.css';
import HamburgerMenu from './components/header/HamburgerMenu';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Footer from './components/footer/footer';
import Countdown from "react-countdown";
import styled from 'styled-components';

function App() {

  const Count = styled.div`
      text-align: center;
      font-size:3rem;
      font-family: 'Courier New', Courier, monospace;
  `
  

  return (
    <>
    <Count>
    <Countdown date={Date.now() + 50000000} />
    </Count>
    <Router>
    <HamburgerMenu/>
      <div className="pages">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      </div>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
