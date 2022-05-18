import Categories from "../../components/Categories/Categories";
import CategoryItem from "../../components/Categories/CategoryItem";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import iconCat from "../../assets/icon-cat.svg";
import { useEffect, useState } from "react";

export const dataVar = {
  id: 1,
  attributes: {
    name: "category one",
    createdAt: "2022-05-09T16:08:26.291Z",
    updatedAt: "2022-05-11T15:30:25.066Z",
    publishedAt: "2022-05-09T16:11:30.366Z",
    image: {
      data: {
        id: 4,
        attributes: {
          name: "cat1.jpg",
          alternativeText: "cat1.jpg",
          caption: "cat1.jpg",
          width: 3840,
          height: 5760,
          formats: {
            thumbnail: {
              name: "thumbnail_cat1.jpg",
              hash: "thumbnail_cat1_d89fd32ef7",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 104,
              height: 156,
              size: 3.75,
              url: "/uploads/thumbnail_cat1_d89fd32ef7.jpg",
            },
            large: {
              name: "large_cat1.jpg",
              hash: "large_cat1_d89fd32ef7",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 667,
              height: 1000,
              size: 81.51,
              url: "/uploads/large_cat1_d89fd32ef7.jpg",
            },
            medium: {
              name: "medium_cat1.jpg",
              hash: "medium_cat1_d89fd32ef7",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 500,
              height: 750,
              size: 49.26,
              url: "/uploads/medium_cat1_d89fd32ef7.jpg",
            },
            small: {
              name: "small_cat1.jpg",
              hash: "small_cat1_d89fd32ef7",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 333,
              height: 500,
              size: 24.21,
              url: "/uploads/small_cat1_d89fd32ef7.jpg",
            },
          },
          hash: "cat1_d89fd32ef7",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 2924.47,
          url: "/uploads/cat1_d89fd32ef7.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          createdAt: "2022-05-09T16:36:36.872Z",
          updatedAt: "2022-05-09T16:36:36.872Z",
        },
      },
    },
    products: {
      data: [
        {
          id: 1,
          attributes: {
            name: "product one",
            description:
              "Leberkas pork belly boudin ham hock buffalo pork loin biltong short loin meatloaf pork chop. Meatloaf leberkas bacon pig sausage pancetta.",
            createdAt: "2022-05-11T15:30:05.969Z",
            updatedAt: "2022-05-11T15:30:06.833Z",
            publishedAt: "2022-05-11T15:30:06.831Z",
          },
        },
      ],
    },
  },
};

type dataType = typeof dataVar;

const Home: React.FC = () => {
  const [categoryData, setCategoryData] = useState<{ data: dataType[] }>();

  useEffect(() => {
    fetch(`http://localhost:1337/api/categories?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return (
    <>
      <Slider />
      {categoryData ? (
        <Categories>
          {categoryData.data.map((category) => {
            return <CategoryItem key={category.id} category={category} />;
          })}
        </Categories>
      ) : (
        <div>loading ...</div>
      )}
      <Footer />
    </>
  );
};

export default Home;
