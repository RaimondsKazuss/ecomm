import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Loader from "../../components/Loader/Loader";

const ProductWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 64rem;
  box-sizing: border-box;
  flex-flow: row wrap;
  text-align: center;
`;

const Image = styled.div<{ bg: string }>`
  width: 5rem;
  height: 5rem;
  text-align: center;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;
`;

const dataExample = {
  id: 2,
  attributes: {
    name: "product 1",
    description:
      "Chislic buffalo porchetta ham, venison ham hock hamburger doner. Alcatra ribeye corned beef pork chicken drumstick spare ribs swine filet mignon t-bone pancetta strip steak burgdoggen capicola.",
    createdAt: "2022-05-15T14:14:22.340Z",
    updatedAt: "2022-05-16T14:10:38.113Z",
    publishedAt: "2022-05-15T14:16:15.950Z",
    categories: {
      data: [
        {
          id: 1,
          attributes: {
            name: "category one",
            createdAt: "2022-05-09T16:08:26.291Z",
            updatedAt: "2022-05-11T15:30:25.066Z",
            publishedAt: "2022-05-09T16:11:30.366Z",
          },
        },
      ],
    },
    image: {
      data: {
        id: 13,
        attributes: {
          name: "photo1.jpg",
          alternativeText: "photo1.jpg",
          caption: "photo1.jpg",
          width: 1024,
          height: 1024,
          formats: {
            thumbnail: {
              name: "thumbnail_photo1.jpg",
              hash: "thumbnail_photo1_62a7c8c9c9",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 156,
              height: 156,
              size: 5.43,
              url: "/uploads/thumbnail_photo1_62a7c8c9c9.jpg",
            },
            large: {
              name: "large_photo1.jpg",
              hash: "large_photo1_62a7c8c9c9",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 1000,
              height: 1000,
              size: 155.78,
              url: "/uploads/large_photo1_62a7c8c9c9.jpg",
            },
            medium: {
              name: "medium_photo1.jpg",
              hash: "medium_photo1_62a7c8c9c9",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 750,
              height: 750,
              size: 90.8,
              url: "/uploads/medium_photo1_62a7c8c9c9.jpg",
            },
            small: {
              name: "small_photo1.jpg",
              hash: "small_photo1_62a7c8c9c9",
              ext: ".jpg",
              mime: "image/jpeg",
              path: null,
              width: 500,
              height: 500,
              size: 43.11,
              url: "/uploads/small_photo1_62a7c8c9c9.jpg",
            },
          },
          hash: "photo1_62a7c8c9c9",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 167.71,
          url: "/uploads/photo1_62a7c8c9c9.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          createdAt: "2022-05-15T14:03:29.547Z",
          updatedAt: "2022-05-15T14:03:29.547Z",
        },
      },
    },
  },
  meta: {},
};

type productDataType = typeof dataExample;

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState<productDataType | null>(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/products/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data.data);
      });
  }, [id]);

  console.log(productData);

  return productData ? (
    <ProductWrapper>
      <div>{productData.id}</div>
      <Image
        bg={`http://localhost:1337${productData.attributes.image.data.attributes.formats.thumbnail.url}`}
      />
      <div>
        {productData.attributes.image.data.attributes.formats.thumbnail.path}
      </div>
      <div>{productData.attributes.name}</div>
      <div>{productData.attributes.description}</div>
    </ProductWrapper>
  ) : (
    <Loader />
  );
};

export default ProductPage;
