import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Root from './Components/Root/Root.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx'
import Statistics from './Components/Statistics/Statistics.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import JobDetails from './Components/JobDetails/JobDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/applied/jobs",
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/job/:id",
        // loader: fetch("https://jsonplaceholder.typicode.com/users"),
        element: < JobDetails ></JobDetails >
      }

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
