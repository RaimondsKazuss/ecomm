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

export type productDataType = {
  id: number;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
};

const Product: React.FC<{ product: productDataType }> = ({ product }) => {
  const { setCartValue } = useContext(CartContext);

  const clickHandler = (product: productDataType) => {
    setCartValue(product);
    //TODO: navigate to product/:id page
  };
  return (
    <StyledProduct>
      <ProductImage />
      <p>{product.attributes.name}</p>
      <button type="button" onClick={() => clickHandler(product)}>
        add to cart
      </button>
    </StyledProduct>
  );
};

export default Product;
