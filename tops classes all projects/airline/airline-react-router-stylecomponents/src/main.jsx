import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './utilityclasses.css';
import './mediaquearry.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

// import Services from './components/Services.jsx';
import App from './App.jsx';
import Destination from './components/top destination/Destination.jsx';
import ClientandIntro from './components/ClientandIntro.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <ClientandIntro />
      },
      {
        path: "destination",
        element: <Destination />

      }
    ]
  }
]
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
