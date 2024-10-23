import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Book-marks/Bookmarks'
import Header from './Components/header/header'

function App() {
 const [bookMarks, setBookMarks]=useState([])

 const [readingTime,setReadingTime]=useState(0)

 const addReadingTime=(time)=>{
  setReadingTime(readingTime+time);
 }

 const addBookCart=blog=>{
  
  const newBookMarks=[...bookMarks,blog]
  setBookMarks(newBookMarks)
 }

  return (
    <>
     <Header></Header>

     <div className='md:flex max-w-7xl mx-auto'>
      <Blogs addBookCart={addBookCart} addReadingTime={addReadingTime}></Blogs>
      <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
