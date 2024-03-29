import React, { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Spinner from './components/Spinner';
import ReactGa from 'react-ga';
import Nav from './components/Nav';
import Meta from './components/Meta';
import MainFooter from './components/MainFooter';

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
    <>
      <Meta />
      <Suspense fallback={<Spinner />}>
        <Nav />
        <main className='pt-24'>
          <Outlet />
        </main>
        <MainFooter />
      </Suspense>
    </>
  );
};

export default App;
