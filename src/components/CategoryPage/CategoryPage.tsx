import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { default as ProductWrapper } from "../Categories/Categories";
import CartContext from "../../CartContext";

const productDataExample = {
  id: 3,
  attributes: {
    name: " category three",
    createdAt: "2022-05-11T15:22:31.464Z",
    updatedAt: "2022-05-11T15:30:31.879Z",
    publishedAt: "2022-05-11T15:24:21.252Z",
    image: {
      data: {
        id: 1,
        attributes: {
          name: "cat3.jpg",
          alternativeText: "cat3.jpg",
          caption: "cat3.jpg",
          width: 3712,
          height: 5568,
          formats: {
            thumbnail: {
              name: "thumbnail_cat3.jpg",
              hash: "thumbnail_cat3_c7c3930e3d",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 104,
              height: 156,
              size: 3.95,
              url: "/uploads/thumbnail_cat3_c7c3930e3d.jpg",
            },
            large: {
              name: "large_cat3.jpg",
              hash: "large_cat3_c7c3930e3d",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 667,
              height: 1000,
              size: 90.28,
              url: "/uploads/large_cat3_c7c3930e3d.jpg",
            },
            medium: {
              name: "medium_cat3.jpg",
              hash: "medium_cat3_c7c3930e3d",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 500,
              height: 750,
              size: 57.32,
              url: "/uploads/medium_cat3_c7c3930e3d.jpg",
            },
            small: {
              name: "small_cat3.jpg",
              hash: "small_cat3_c7c3930e3d",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 333,
              height: 500,
              size: 28.87,
              url: "/uploads/small_cat3_c7c3930e3d.jpg",
            },
          },
          hash: "cat3_c7c3930e3d",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 1947.82,
          url: "/uploads/cat3_c7c3930e3d.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          createdAt: "2022-05-09T16:36:36.434Z",
          updatedAt: "2022-05-09T16:36:36.434Z",
        },
      },
    },
    products: {
      data: [
        {
          id: 9,
          attributes: {
            name: "product 8",
            description:
              "Chislic buffalo porchetta ham, venison ham hock hamburger doner. Alcatra ribeye corned beef pork chicken drumstick spare ribs swine filet mignon t-bone pancetta strip steak burgdoggen capicola.",
            createdAt: "2022-05-16T13:54:27.878Z",
            updatedAt: "2022-05-16T14:11:36.637Z",
            publishedAt: "2022-05-16T14:08:14.270Z",
          },
        },
        {
          id: 10,
          attributes: {
            name: "product 9",
            description:
              "Chislic buffalo porchetta ham, venison ham hock hamburger doner. Alcatra ribeye corned beef pork chicken drumstick spare ribs swine filet mignon t-bone pancetta strip steak burgdoggen capicola.",
            createdAt: "2022-05-16T14:11:48.572Z",
            updatedAt: "2022-05-16T14:12:00.950Z",
            publishedAt: "2022-05-16T14:12:00.949Z",
          },
        },
        {
          id: 11,
          attributes: {
            name: "product10",
            description:
              "Chislic buffalo porchetta ham, venison ham hock hamburger doner. Alcatra ribeye corned beef pork chicken drumstick spare ribs swine filet mignon t-bone pancetta strip steak burgdoggen capicola.",
            createdAt: "2022-05-16T14:12:19.140Z",
            updatedAt: "2022-05-16T14:12:19.693Z",
            publishedAt: "2022-05-16T14:12:19.692Z",
          },
        },
      ],
    },
  },
  meta: {},
};
type productType = typeof productDataExample;

const CategoryPage: React.FC = () => {
  const [productData, setProductData] = useState<{ data: productType }>();
  const { setCartValue } = useContext(CartContext);
  const { id } = useParams();

  const clickHandler = (id: number) => {
    setCartValue(id);
  };

  useEffect(() => {
    fetch(`http://localhost:1337/api/categories/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <ProductWrapper>
      {productData ? (
        productData.data.attributes.products.data.map((product) => {
          return (
            <div onClick={() => clickHandler(product.id)} key={product.id}>
              {product.attributes.name}
            </div>
          );
        })
      ) : (
        <div>loading ...</div>
      )}
    </ProductWrapper>
  );
};

export default CategoryPage;
