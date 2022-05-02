import styled from "styled-components";
import { paddings } from "../../theme/theme";

const StyledProductList = styled.div`
  width: 100%;
  padding: ${paddings.xs};
  box-sizing: border-box;
`;

const ProductList: React.FC = ({ children }) => {
  return <StyledProductList>{children}</StyledProductList>;
};

export default ProductList;
