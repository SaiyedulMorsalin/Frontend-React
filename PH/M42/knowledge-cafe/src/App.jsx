
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
      <div className='container mx-auto' >
        <Header></Header>
        <div className='grid grid-cols-12 border-cyan-300'>
          <div className='col-span-8'>  <Blogs></Blogs></div>
          <div className='col-span-4'> <Bookmarks></Bookmarks></div>
        </div>
      </div>
    </>
  )
}

export default App
