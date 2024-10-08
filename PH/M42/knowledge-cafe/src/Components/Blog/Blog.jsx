import boy1 from "../../assets/Images/boy1.png";
import { FaRegBookmark, FaRegComments, FaRegThumbsUp, FaRegPlayCircle, FaRegShareSquare } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";




const Blog = (blogs) => {
    console.log(blogs)
    return (
        <>
            <div className="border-2 m-5 p-5">
                <div className=" ">
                    <h1 className="text-4xl font-bold">{blogs.blog.title}</h1>
                    <img src={blogs.blog.urlToImage}></img>
                    <h1>{blogs.blog.description}</h1>



                    <div className="flex justify-between">
                        <di>
                            <div className="flex items-center gap-4">
                                <div>
                                    <img className="w-10 h-10" src={boy1} ></img>
                                </div>
                                <div>

                                    <h1>Author Name</h1>
                                    <ol className="flex gap-2 ">
                                        <li className="">Published in <a href="" className="text-blue-600 underline">{blogs.blog.source.name}</a> </li>
                                        <li>5 min read</li>
                                        <li>{blogs.blog.publishedAt}</li>

                                    </ol>

                                </div>
                            </div>

                        </di>
                        <div>
                            <h1>Icons</h1>
                        </div>
                    </div>
                    <ul className="flex gap-2 underline text-red-600">
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1"><a href="#">#Programming</a></li>
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1"><a href="#">#Programming</a></li>
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1"><a href="#">#Programming</a></li>
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1"><a href="#">#Programming</a></li>
                        <li className="hover:bg-gray-300 rounded mx-2 p-1 hover:outline-1"><a href="#">#Programming</a></li>
                    </ul>
                    <div className="border-b-2 border-t-2">
                        <div className="flex justify-between p-3 mx-4">
                            <div>
                                <ul className="flex gap-2">
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <FaRegThumbsUp /></button></li>
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <FaRegComments /></button></li>

                                </ul>
                            </div>
                            <div>
                                <ul className="flex gap-2">
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <FaRegBookmark /></button></li>
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <FaRegPlayCircle /></button></li>
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <FaRegShareSquare /></button></li>
                                    <li><button className="hover:bg-gray-200 mx-2 text-2xl">  <BsThreeDots /></button></li>


                                </ul>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </>
    );


};

export default Blog;