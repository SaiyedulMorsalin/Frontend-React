import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root =()=>{
    return (
        <>
            <div className="h-16">
            <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-117px)]'>
           <Outlet ></Outlet>
           </div>
            <Footer></Footer>
        </>
    )
}


export default Root;