import { useEffect, useState } from "react";
import Categories from "../../components/Categories/Categories";
import CategoryItem from "../../components/Categories/CategoryItem";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import SideBar from "../../components/SideBar/SideBar";
import Slider from "../../components/Slider/Slider";

const Home: React.FC = () => {
  const [sideBarState, setSideBarState] = useState(false)

  const toggleSideBar = () => {
    setSideBarState(!sideBarState)
  }

  return (
    <>
      <Nav toggleSideBar={toggleSideBar}/>
      { sideBarState && (
          <SideBar/>
        )
      }
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
