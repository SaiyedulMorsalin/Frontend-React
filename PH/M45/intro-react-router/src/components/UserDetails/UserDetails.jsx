import { useLoaderData } from "react-router-dom";

const UserDetails = () => {

    const user = useLoaderData();
    const { name, phone, email } = user;
    return (
        <>
            <div>
                <h1>Name: {name}</h1>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </>
    )
}

export default UserDetails;