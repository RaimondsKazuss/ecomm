import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Slider from "../Slider/Slider";

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      {/* <SideBar/> */}
      <Slider />
      <Categories />
      <Footer/>
    </>
  );
};

export default HomePage;
