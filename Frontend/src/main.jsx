import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { Dashboard } from './components/Dasboard.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Projects } from './pages/Projects.jsx';
import { Contact } from './pages/Contact.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/About", element: <About /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
