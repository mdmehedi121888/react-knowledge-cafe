import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';
const Blog = (props) => {
    const bookmarkBtn = props.data.props.bookmarkBtn;
    const readBtn = props.data.props.readBtn;
    const {img,id,title,author,minute} =  props.data.data;
    const {name}  = author;
    const author_img = author.img;
    return (
        <div className='blog'>
            <img className='blog-img' src={img}></img>
            <div className='author-and-bookmark'>
            <div className='author-part'>
                <img className='author-img' src={author_img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>Mar 14 (4 Days ago)</p>
                </div>
            </div>
            <div className='bookmark-part'>
               <div><p style={{fontSize:'25px'}}> <span>{minute}</span> min read</p></div>
               
               <div style={{fontSize:'25px'}} onClick={()=> bookmarkBtn(title)}><FontAwesomeIcon icon={ faBookmark} /></div>
            </div>
            </div>
           
            <h1 className="text-2xl">{title}</h1>
            <pre style={{fontSize:'20px'}}>#beginners     #programming</pre>
            <a href="#" style={{fontSize:'25px'}} onClick={()=>readBtn(minute)}>Mark as Read</a>
            <hr></hr>
        </div>
    );
};
import './Blog.css';
export default Blog;