import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from './components/Spinner';
import ReactGa from 'react-ga';

import Nav from './components/Nav';
// import HeadTags from './components/HeadTags';//change to META
import MainFooter from './components/MainFooter';

// TODO Implement Meta
//TODO REFACTOR PROJECTS AND MORE ME
const App = () => {
  useEffect(() => {
    ReactGa.initialize(
      'G-C4LTJX72RT'
      //  {
      //   debug: true,
      //   titleCase: false,
      //   gaOptions: {
      //     userId: 123
      //   }
      // }
    );

    // To report page
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      {/* <HeadTags /> */}
      <Nav />
      <Outlet />
      <MainFooter />
    </Suspense>
  );
};

export default App;
