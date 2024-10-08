import boy1 from "../../assets/Images/boy1.png";
import { FaRegComments, FaRegThumbsUp, FaRegPlayCircle, FaRegShareSquare } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
import PropTypes from 'prop-types';

const Blog = ({ blog, addBookmark }) => {

    return (
        <>
            <div className="border-2 m-5 p-5">
                <div>
                    <h1 className="text-4xl font-bold">{blog.title}</h1>
                    <img src={blog.urlToImage} alt="Blog cover" />
                    <h1>{blog.description}</h1>

                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className="w-10 h-10" src={boy1} alt="Author" />
                                </div>
                                <div>
                                    <h1>Author Name</h1>
                                    <ol className="flex gap-2">
                                        <li className="">
                                            Published in <a href="#" className="text-blue-600 underline">{blog.source.name}</a>
                                        </li>
                                        <li>5 min read</li>
                                        <li>{blog.publishedAt}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1>Icons</h1>
                        </div>
                    </div>
                    <ul className="flex gap-2 underline text-red-600">
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1">
                            <a href="#">#Programming</a>
                        </li>
                        {/* Other tags... */}
                    </ul>
                    <div className="border-b-2 border-t-2">
                        <div className="flex justify-between p-3 mx-4">
                            <div>
                                <ul className="flex gap-2">
                                    <li>
                                        <button className="hover:bg-gray-200 mx-2 text-2xl">
                                            <FaRegThumbsUp />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:bg-gray-200 mx-2 text-2xl">
                                            <FaRegComments />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="flex gap-2">
                                    <li>
                                        <button onClick={() => addBookmark(blog)} className="hover:bg-gray-200 mx-2 text-2xl">
                                            Bookmark
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:bg-gray-200 mx-2 text-2xl">
                                            <FaRegPlayCircle />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:bg-gray-200 mx-2 text-2xl">
                                            <FaRegShareSquare />
                                        </button>
                                    </li>
                                    <li>
                                        <button className="hover:bg-gray-200 mx-2 text-2xl">
                                            <BsThreeDots />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        source: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        publishedAt: PropTypes.string.isRequired,
    }).isRequired,
    addBookmark: PropTypes.func.isRequired,
};

export default Blog;
