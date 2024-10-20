import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
            <div className="text-center mt-28 space-y-5">
                <h1 className="text-5xl">Oops !!!</h1>
                <h3 className="md:text-4xl text-red-700 font-semibold">Page Not Found........</h3>
                <button> <Link to={"/"}>Back to Home</Link></button>
            </div>
        </>
    )
}

export default ErrorPage;