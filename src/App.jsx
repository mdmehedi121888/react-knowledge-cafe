
import { useState } from 'react';
import './App.css'
import Header from './component/Header/Header'
import Blogs from './component/Main/Blog section/Blogs/Blogs'
import Bookmarks from './component/Main/Bookmark/Bookmarks'

function App() {
  const [count,setCount] = useState(0);
  const [title,setTitle] = useState([]);
  const [minute,setMinute] = useState(0);
const bookmarkBtn = (p) => {
  setCount(count+1);
  const t = [...title,p];
  setTitle(t);
}
let m;
const readBtn = (m) => {
  setMinute(minute+m);
}

  return (
    <>
      <Header></Header>
      <hr />
      <div className='main-container'>
        <Blogs bookmarkBtn={bookmarkBtn} readBtn={readBtn}></Blogs>
        <Bookmarks count={count} title={title} minute={minute}></Bookmarks>
        
      </div>
    </>
  )
}

export default App
