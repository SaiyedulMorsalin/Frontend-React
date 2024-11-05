import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root =()=>{
    return (
        <>
            <Navbar></Navbar>
           <div className="min-h-[calc(100vh-117px)]">
           <Outlet ></Outlet>
           </div>
            <Footer></Footer>
        </>
    )
}


export default Root;