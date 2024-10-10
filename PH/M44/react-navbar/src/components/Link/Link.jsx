import PropTypes from "prop-types";

function Link({ route }) {
    const { name } = route;

    return (
        <>
            <li>{name}</li>
        </>
    );
}

// Correctly setting up propTypes for the `route` object
Link.propTypes = {
    route: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        path: PropTypes.string.isRequired
    }).isRequired
};

export default Link;
