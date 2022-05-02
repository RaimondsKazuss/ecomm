import styled from "styled-components";
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

const Product: React.FC = () => {
  return (
    <StyledProduct>
      <ProductImage />
      <p>product name</p>
    </StyledProduct>
  );
};

export default Product;
