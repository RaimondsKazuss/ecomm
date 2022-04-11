import Categories from "../../components/Categories/Categories";
import CategoryItem from "../../components/Categories/CategoryItem";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import Slider from "../../components/Slider/Slider";

const Home: React.FC = () => {
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

export default Home;
