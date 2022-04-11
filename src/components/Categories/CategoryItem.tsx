import styled from "styled-components";
import { colors, margins } from "../../theme/theme";

const Item = styled.div`
  margin: ${margins.xs};
  height: 3rem;
  min-width: 2rem;
  width: 44%;
  background: ${colors.lightBlue};
  display: inline-block;
`;

const CategoryItem: React.FC = () => {
  return (
    <Item>
      <div>icon</div>
      <div>title</div>
    </Item>
  );
};

export default CategoryItem;
