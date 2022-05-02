import styled from "styled-components";
import Product from "../../components/Product/Product";
import ProductList from "../../components/ProductList/ProductList";
import { colors, fontSizes, margins } from "../../theme/theme";

const SubmitButton = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: ${margins.md};
  background: ${colors.darkBlue};
  color: ${colors.bg};
  font-size: ${fontSizes.md};
  text-transform: capitalize;
`;

const ShoppingCart: React.FC = () => {
  return (
    <>
      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <SubmitButton>checkout</SubmitButton>
      </ProductList>
    </>
  );
};

export default ShoppingCart;
