import { Link } from "react-router-dom";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    console.log(user);

    return (
        <>
            <div className="cols-span-1 border">
                <h1>Name: {name}</h1>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <Link to={`/user/${id}`} className="border hover:bg-red-200">Show Details</Link>
            </div>
        </>
    )
}


export default User;