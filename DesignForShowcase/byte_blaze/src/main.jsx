import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './Layouts/Root'
import Blogs from './Pages/Blogs'
import Bookmarks from './Pages/Bookmarks'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(

  <>
   <RouterProvider router={router}/>
   
  </>
)
