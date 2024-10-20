import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FeaturedJobs from "../FeaturedJobs/FeaturedeJobs";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {

    return (
        <>
            <Header></Header>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </>
    )
}

export default Home;