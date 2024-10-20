import { NavLink } from "react-router-dom";
import logoimg from "../../assets/logo/CareerHub.png"
const Navbar = () => {

    return (
        <>
            <div className="flex justify-between gap-5 items-center mt-5 border">
                <div>
                    <img src={logoimg} />
                </div>
                <div className="flex gap-5">
                    <NavLink to={"/statics"}>Statics</NavLink>
                    <NavLink to={"/applied/jobs"}>Applied Jobs</NavLink>
                    <NavLink to={"/blogs"}>Blog</NavLink>
                </div>

                <NavLink to={"/start/apply"} className="border p-2 m-2 rounded bg-gradient-to-r from-[#0974f1] to-[#6fafee]">Start Apply</NavLink>

            </div>
        </>
    )
}

export default Navbar;