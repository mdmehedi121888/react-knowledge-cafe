import React from 'react';
import './Bookmark.css';
const Bookmarks = (props) => {
    const ar = props.title;
    return (
        <div className='bookmark-container'>
                <div className='bookmark-section'>
            <h1>Spent time on read : <span>{props.minute}</span> min </h1>
            <div></div>
            <h1>Bookmarked Blogs : <span>{props.count}</span> </h1>
            <div>
                {
                    ar.map(data => <h1>{data}</h1>)
                }
                
            </div>
        </div>
        </div>
        
    );
};

export default Bookmarks;