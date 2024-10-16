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
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
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
      loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element: <UserDetails></UserDetails>
    },
    {
      path: "/users",
      loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      element: <Users></Users>,

    },
    {
      path: "/posts",
      loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      element: <Posts></Posts>
    }


    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
