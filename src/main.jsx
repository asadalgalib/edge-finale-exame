import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Mainlayout from './Components/Mainlayout/Mainlayout.jsx';
import Bannerlayout from './Components/Bannerlayout/Bannerlayout.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Statictis from './Components/Statictis/Statictis.jsx';
import Details from './Components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path: '/',
        element: <Bannerlayout></Bannerlayout>,
      },
      {
        path: '/statictis',
        element: <Statictis></Statictis>,
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: 'product/:id',
        loader :({params})=> fetch('../public/data.json'),
        element:<Details></Details>,
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
