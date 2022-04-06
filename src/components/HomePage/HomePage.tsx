import Categories from "../Categories/Categories";
import CategoryItem from "../Categories/CategoryItem";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Slider from "../Slider/Slider";

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      {/* <SideBar/> */}
      <Slider />
      <Categories>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </Categories>
      <Footer/>
    </>
  );
};

export default HomePage;
