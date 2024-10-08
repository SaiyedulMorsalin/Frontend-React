import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <>
            <div className="border-2 m-5 p-5 col-span-4">
                <h1 className="text-2xl ">Spent Time on Read: </h1>

            </div>
            <div className="border-2 m-5 p-5 col-span-4">
                <h1> All Bookmarks: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object
}
export default Bookmarks;