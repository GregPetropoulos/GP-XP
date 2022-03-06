import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';

const Land = lazy(() => import('./components/landing/Land'));
const NavBar = lazy(() => import('./components/NavBar/index'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const Experimental = lazy(() => import('./pages/Experimental'));

const NavBarResp = lazy(() => import('./components/NavBarResp/NavBarResp'));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <h1 className='loading-spinner'>
            Loading.....
            <Spinner className='spinner' animation='border' variant='primary' />
          </h1>
        }>
        <NavBar />
        <NavBarResp />
        <Routes>
          <Route exact path='/' element={<Land />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/experimental' element={<Experimental />} />
          <Route exact path='/blog' element={<Blog />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
