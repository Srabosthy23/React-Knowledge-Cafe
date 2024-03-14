import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  
  const [bookmarks, setBookmarks] = useState([]);

  const[readingTime, setReadingTime] = useState(0)

  const handleBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    // console.log("mark as read", time);
    setReadingTime(readingTime + time)
    // console.log(" remove bookmrk", id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id) 
    setBookmarks(remainingBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs 
          handleBookmark = {handleBookmark} 
          handleMarkAsRead = {handleMarkAsRead}
          ></Blogs>
        <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
