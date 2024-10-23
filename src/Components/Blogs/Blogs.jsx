import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";

const Blogs = ({addBookCart, addReadingTime}) => {
    
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl mb-3 mt-1">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog=><Blog 
                    addBookCart={addBookCart} 
                    key={blog.id} 
                    blog={blog}
                    addReadingTime={addReadingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    
    addBookCart:PropTypes.object,
    addReadingTime:PropTypes.object
}

export default Blogs;