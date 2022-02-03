import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Land from './components/landing/Land';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/index';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Experimental from './pages/Experimental';
import './App.css';


const App = () => {
  return (
    <Router>

        <NavBar />
        <Routes>
          {/* <section className='container'> */}
            <Route exact path='/' element={<Land/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/projects' element={<Projects/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/experimental' element={<Experimental/>} />
            <Route exact path='/blog' element={<Blog/>} />
          {/* </section> */}
        </Routes>

    </Router>
  );
};

export default App;
