
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (blog) => {
    console.log("Bookmark added:", blog);
  };

  return (
    <>
      <div className='container mx-auto' >
        <Header></Header>
        <div className='grid grid-cols-12 border-cyan-300'>
          <div className='col-span-8'>  <Blogs addBookmark={addBookmark}></Blogs></div>
          <div className='col-span-4'> <Bookmarks ></Bookmarks></div>
        </div>
      </div>
    </>
  )
}

export default App
