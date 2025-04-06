import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter, Link } from '@tanstack/react-router';
import Spinner from './components/Spinner.tsx';
// Import the generated route tree
import { routeTree } from './routeTree.gen.ts';

import './styles.css';
import reportWebVitals from './reportWebVitals.ts';

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
  defaultPendingComponent: () => <Spinner />,
  defaultPendingMs: 2000, // Set default threshold to 1 second
  defaultNotFoundComponent: () => {
    return (
      <div className='flex justify-center items-center w-screen flex-wrap my-30'>
        <h2 className=' text-center w-full'>Not found!</h2>
        <Link className='btn btn-secondary my-6' to="/">Go home</Link>
      </div>
    )
  },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
