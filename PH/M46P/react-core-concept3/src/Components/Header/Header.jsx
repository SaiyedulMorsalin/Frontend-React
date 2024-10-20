import { NavLink } from "react-router-dom";
import userImg from "../../assets/images/user.png"
import ImageBox from "../ImageBox/ImageBox";

const Header = () => {


    return (
        <>
            <div className="md:flex gap-5 bg-[#c5caf5] md:justify-center items-center">
                <div className="border  md:w-1/2 space-y-3">
                    <h1 className="text-5xl">One Step <br /> Closer To Your <br /> <span>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <NavLink to={"/signup"} className="btn btn-outline bg-gradient-to-r from-[#7E90FE] to-[#9873FF] outline-none border-none">Get Started</NavLink>

                </div>
                <div className="border  md:w-1/2">

                    <ImageBox img={userImg} height={200} width={200}></ImageBox>
                </div>

            </div>
        </>
    )
}


export default Header;