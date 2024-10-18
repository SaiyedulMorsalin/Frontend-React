const Post = ({ post }) => {
    const { userId, id, title, body } = post;

    return (
        <>
            <div className="border p-5 space-y-5">
                <h1>Title: {title}</h1>
            </div>
        </>
    )
}


export default Post;