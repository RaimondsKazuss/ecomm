import styled from "styled-components";

const CategoryWrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 64rem;
  box-sizing: border-box;
  flex-flow: row wrap;
  text-align: center;
`;

const Categories: React.FC = ({ children }) => {
  return <CategoryWrapper>{children}</CategoryWrapper>;
};

export default Categories;
