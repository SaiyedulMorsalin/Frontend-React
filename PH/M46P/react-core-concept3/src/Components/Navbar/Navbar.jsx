import { NavLink } from "react-router-dom";
import logoimg from "../../assets/logo/CareerHub.png"
const Navbar = () => {
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
        <li><NavLink to={"/applied/jobs"}>Applied Jobs</NavLink></li>
        <li><NavLink to={"/blogs"}>Blog</NavLink></li>
    </>
    return (
        <>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <NavLink to={"/"}><img src={logoimg}></img></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to={"/start/apply"} className="btn btn-outline bg-gradient-to-r from-[#7E90FE] to-[#9873FF] outline-none border-none">Start Apply</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar;