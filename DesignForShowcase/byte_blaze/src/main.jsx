import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Root from './Layouts/Root'
import Blogs from './Pages/Blogs'
import Bookmarks from './Pages/Bookmarks'
import Home from './Pages/Home'
import App from './App'

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
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      

    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App></App>
  </StrictMode>,
)
