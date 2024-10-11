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
            <nav className="bg-yellow-700 p-6">
                <div className="text-3xl font-semibold lg:hidden" onClick={() => setOpen(!open)}>



                    {
                        open === true ? <FaXmark onClick={handleMenuClik}></FaXmark> : <HiOutlineMenuAlt1 onClick={handleMenuClik} />
                    }
                </div>
                <ul className={`lg:flex duration-1000 lg:gap-12  absolute lg:static ${open ? '  top-16 ' : '-top-60 hidden'}bg-yellow-300`}>
                    {
                        routes.map((route, idx) => (
                            <Link key={idx} route={route} />
                        ))
                    }
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
