import { useEffect, useState } from "react";
import Link from "../Link/Link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetch("routes.json")
            .then(res => res.json())
            .then(data => setRoutes(data))
    }, []);
    const [menubar, setMenubar] = useState(!false)
    const [open, setOpen] = useState(false)
    const handleMenuClik = () => {
        setMenubar(true)
        console.log(menubar);
    }
    return (
        <>
            <div className="text-3xl font-semibold lg:hidden" onClick={() => setOpen(!open)}>



                {
                    open === true ? <FaXmark onClick={handleMenuClik}></FaXmark> : <HiOutlineMenuAlt1 onClick={handleMenuClik} />
                }
            </div>
            <ul className="lg:flex lg:gap-8">
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
