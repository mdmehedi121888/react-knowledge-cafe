import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';
const Blogs = (props) => {
    const [blogs,setBlog] = useState([]);
    useEffect(() => {
        fetch("../../../../../public/fakeData.json")
        .then(res => res.json())
        .then( data => setBlog(data));
    },[])
    return (
        <div className='blog-container'>
           {
            blogs.map(data => <Blog key={data.id} data={{data,props}}></Blog>)
           }
        </div>
    );
};

export default Blogs;