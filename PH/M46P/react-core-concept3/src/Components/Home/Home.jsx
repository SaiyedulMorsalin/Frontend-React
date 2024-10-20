import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {

    return (
        <>
            <div>

                <Navbar></Navbar>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home;