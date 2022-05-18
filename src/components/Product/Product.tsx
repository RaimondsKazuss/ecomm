import { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../CartContext";
// import { productType } from "../../pages/CategoryPage/CategoryPage";
import { colors, margins } from "../../theme/theme";

const StyledProduct = styled.div`
  width: 100%;
  height: 5rem;
  border: 1px solid ${colors.darkBlue};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`;

const ProductImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 ${margins.sm};
  background: ${colors.lightBlue};
`;

const productDataExample = {
  id: 9,
  attributes: {
    name: "product 8",
    description:
      "Chislic buffalo porchetta ham, venison ham hock hamburger doner. Alcatra ribeye corned beef pork chicken drumstick spare ribs swine filet mignon t-bone pancetta strip steak burgdoggen capicola.",
    createdAt: "2022-05-16T13:54:27.878Z",
    updatedAt: "2022-05-16T14:11:36.637Z",
    publishedAt: "2022-05-16T14:08:14.270Z",
  },
};

type productDataType = typeof productDataExample;

const Product: React.FC<{ product: productDataType }> = ({ product }) => {
  const { setCartValue } = useContext(CartContext);

  const clickHandler = (name: string) => {
    setCartValue(name);
    //navigate to product/:id page
  };
  return (
    <StyledProduct onClick={() => clickHandler(product.attributes.name)}>
      <ProductImage />
      <p>{product.attributes.name}</p>
    </StyledProduct>
  );
};

export default Product;
