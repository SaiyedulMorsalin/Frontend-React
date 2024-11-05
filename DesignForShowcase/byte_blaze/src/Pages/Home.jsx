
import Hero from "../components/Hero";
import wave from '../assets/wave.svg'
const Home = () => {
  return (
    <>
    
     <Hero />
   
     <img className="w-full" src={wave} />
    </>
  );
};

export default Home;
