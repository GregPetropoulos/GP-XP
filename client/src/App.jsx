import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';


const NavBar = lazy(() => import('./components/NavBar/index'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const ErrorSection =lazy (()=> import('./components/ErrorSection'));


const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <h1 className='loading-spinner'>
            Loading.....
            need spinner here
          </h1>
        }>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/*' element={<ErrorSection />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
