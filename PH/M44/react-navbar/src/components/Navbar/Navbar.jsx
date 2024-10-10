import { useEffect, useState } from "react";
import Link from "../Link/Link";

const Navbar = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch("routes.json")
            .then(res => res.json())
            .then(data => setRoutes(data))
    }, []);

    return (
        <>
            <h1>Navbar</h1>
            <ul>
                {
                    routes.map((route, idx) => (
                        <Link key={idx} route={route} />
                    ))
                }
            </ul>
        </>
    );
};

export default Navbar;
