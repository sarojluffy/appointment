import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Headings from "../Components/Headings";
import Getstarted from "../Components/subcomponents/Getstarted";
import Footer from "../Components/Footer";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative  h-full ">
        <Navbar />
        <Headings />
        <Getstarted />

        <About />
        <About />

        <Footer />
      </div>


    </>
  );
};

export default Main;
