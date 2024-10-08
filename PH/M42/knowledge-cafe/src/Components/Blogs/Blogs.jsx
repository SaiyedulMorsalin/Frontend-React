import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ addBookmark }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="">
            {
                blogs.map((blog, idx) => <Blog addBookmark={addBookmark} blog={blog} key={idx}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    addBookmark: PropTypes.func,
};
export default Blogs;