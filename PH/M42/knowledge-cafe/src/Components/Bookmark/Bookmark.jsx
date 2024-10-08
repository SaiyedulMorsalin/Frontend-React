import PropTypes from "prop-types";
const Bookmark = ({ bookmark }) => {
    return (
        <div className="m-4 p-4 bg-gray-300 rounded hover:bg-white hover:cursor-pointer">
            <h1>{bookmark.title}</h1>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        urlToImage: PropTypes.string
    }).isRequired
};
export default Bookmark;