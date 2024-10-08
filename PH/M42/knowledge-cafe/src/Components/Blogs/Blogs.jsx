import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="">
            {
                blogs.map((blog, idx) => <Blog blog={blog} key={idx}></Blog>)
            }
        </div>
    );
};

export default Blogs;