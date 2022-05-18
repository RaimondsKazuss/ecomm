import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { default as ProductWrapper } from "../../components/Categories/Categories";
import ProductList from "../../components/ProductList/ProductList";
import Product from "../../components/Product/Product";
import Loader from "../../components/Loader/Loader";

const categoryDataExample = {
  id: 2,
  attributes: {
    name: "category two",
    createdAt: "2022-05-09T16:08:44.459Z",
    updatedAt: "2022-05-11T15:30:16.915Z",
    publishedAt: "2022-05-09T16:14:30.871Z",
    image: {
      data: {
        id: 3,
        attributes: {
          name: "cat2.jpg",
          alternativeText: "cat2.jpg",
          caption: "cat2.jpg",
          width: 3712,
          height: 5568,
          formats: {
            thumbnail: {
              name: "thumbnail_cat2.jpg",
              hash: "thumbnail_cat2_4c719b9bbe",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 104,
              height: 156,
              size: 3.36,
              url: "/uploads/thumbnail_cat2_4c719b9bbe.jpg",
            },
            large: {
              name: "large_cat2.jpg",
              hash: "large_cat2_4c719b9bbe",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 667,
              height: 1000,
              size: 69.36,
              url: "/uploads/large_cat2_4c719b9bbe.jpg",
            },
            medium: {
              name: "medium_cat2.jpg",
              hash: "medium_cat2_4c719b9bbe",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 500,
              height: 750,
              size: 41.58,
              url: "/uploads/medium_cat2_4c719b9bbe.jpg",
            },
            small: {
              name: "small_cat2.jpg",
              hash: "small_cat2_4c719b9bbe",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 333,
              height: 500,
              size: 20.45,
              url: "/uploads/small_cat2_4c719b9bbe.jpg",
            },
          },
          hash: "cat2_4c719b9bbe",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 2456.96,
          url: "/uploads/cat2_4c719b9bbe.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          createdAt: "2022-05-09T16:36:36.652Z",
          updatedAt: "2022-05-09T16:36:36.652Z",
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

export type dataType = typeof categoryDataExample;

const CategoryPage: React.FC = () => {
  const [productData, setProductData] = useState<{ data: dataType }>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:1337/api/categories/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);

  return (
    <ProductWrapper>
      <ProductList>
        {productData ? (
          productData.data.attributes.products.data.map((product) => {
            return <Product product={product} key={product.id} />;
          })
        ) : (
          <Loader />
        )}
      </ProductList>
    </ProductWrapper>
  );
};

export default CategoryPage;
