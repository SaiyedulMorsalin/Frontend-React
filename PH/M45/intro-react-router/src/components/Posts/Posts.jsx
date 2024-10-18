import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts);
    return (
        <>
            <div>
                <h1>All Post {posts.length}</h1>
            </div>
            <div>
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </>
    )

}

export default Posts