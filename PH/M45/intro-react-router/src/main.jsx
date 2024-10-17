import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';

import Users from './components/Users/Users.jsx';
import User from './components/User/User.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [{
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/about",
      element: <About></About>,
    },
    {
      path: "user/:userId",
      element: <User></User>
    },
    {
      path: "/users",
      loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      element: <Users></Users>,

    }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
