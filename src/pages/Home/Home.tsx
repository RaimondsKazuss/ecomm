import Categories from "../../components/Categories/Categories";
import CategoryItem from "../../components/Categories/CategoryItem";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import iconCat from "../../assets/icon-cat.svg";
import cat1 from "../../assets/categories/cat1.jpg";
import cat2 from "../../assets/categories/cat2.jpg";
import cat3 from "../../assets/categories/cat3.jpg";
import cat4 from "../../assets/categories/cat4.jpg";
import cat5 from "../../assets/categories/cat5.jpg";
import cat6 from "../../assets/categories/cat6.jpg";

const categoryData = [
  {
    id: 1,
    icon: iconCat,
    title: "category 1 title",
    bgImage: cat1,
  },
  {
    id: 2,
    icon: iconCat,
    title: "category 2 title",
    bgImage: cat2,
  },
  {
    id: 3,
    icon: iconCat,
    title: "category 3 title",
    bgImage: cat3,
  },
  {
    id: 4,
    icon: iconCat,
    title: "category 4 title",
    bgImage: cat4,
  },
  {
    id: 5,
    icon: iconCat,
    title: "category 5 title",
    bgImage: cat5,
  },
  {
    id: 6,
    icon: iconCat,
    title: "category 6 title",
    bgImage: cat6,
  },
];

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Categories>
        {categoryData.map((category) => {
          return <CategoryItem key={category.id} category={category} />;
        })}
      </Categories>
      <Footer />
    </>
  );
};

export default Home;
