import { useContext } from "react";
import { useNavigate } from "react-router";
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
  const { cartValue, setCartValue } = useContext(CartContext);
  const navigate = useNavigate();

  const addToCart = (product: productDataType) => {
    !cartValue.find((item) => item.id === product.id) &&
      setCartValue([...cartValue, product]);
  };

  const viewProduct = (product: productDataType) => {
    navigate(`/products/${product.id}`, { replace: true });
  };
  return (
    <StyledProduct>
      <ProductImage />
      <p>{product.attributes.name}</p>
      <button type="button" onClick={() => addToCart(product)}>
        add to cart
      </button>
      <button type="button" onClick={() => viewProduct(product)}>
        view product
      </button>
    </StyledProduct>
  );
};

export default Product;
