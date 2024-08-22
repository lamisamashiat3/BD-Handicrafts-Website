import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import BusinessCard from "../BusinessCard/BusinessCard";
import Footer from "../Footer/Footer";
import Banner from '../../assets/banner.png';

const Home = () => {
    const news = useLoaderData();
    console.log(news)
    return (
        <div>
           <Navbar></Navbar>
           
<img src ={Banner}  />

            <BusinessCard></BusinessCard>

            <Footer></Footer>
        </div>
    );
};

export default Home;