
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = () => {
    return (
        <>
            <div className="border-2 m-5 p-5 col-span-4">
                <h1 className="text-2xl ">Spent Time on Read: </h1>

            </div>
            <div className="border-2 m-5 p-5 col-span-4">
                <Bookmark ></Bookmark>
            </div>
        </>
    );
};

export default Bookmarks;