// Author: Greg Petropoulos
// 6.9.22
// My portfolio GP-XP

import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Spinner from './components/Spinner';
import ReactGa from 'react-ga';

// const NavBar = lazy(() => import('./components/NavBar/index'));
import Nav from './components/Nav';
import HeadTags from './components/HeadTags';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const MoreMe = lazy(() => import('./pages/MoreMe'));
const ErrorSection = lazy(() => import('./components/ErrorSection'));

const App = () => {
  useEffect(() => {
    ReactGa.initialize('G-C4LTJX72RT', {
      debug: true,
      titleCase: false,
      gaOptions: {
        userId: 123
      }
    });

    // To report page
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <HeadTags />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/more-me' element={<MoreMe />} />
          <Route exact path='/*' element={<ErrorSection />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
