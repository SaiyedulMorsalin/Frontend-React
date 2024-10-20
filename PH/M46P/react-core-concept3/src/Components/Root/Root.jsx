import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {


    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </>
    )
}
export default Root;