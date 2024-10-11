
import PropTypes from "prop-types";
const PriceOption = ({ option }) => {
    console.log(option);
    const { memberships } = option;

    return (
        <>
            <h1>{memberships.membership_id}</h1>
        </>
    )
}
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;