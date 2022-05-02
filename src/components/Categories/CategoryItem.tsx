import styled from "styled-components";
import { colors, margins, paddings } from "../../theme/theme";

const Item = styled.div<{ bg: string }>`
  position: relative;
  margin: ${margins.xs};
  height: 8rem;
  min-width: 2rem;
  width: 47%;
  background: ${colors.lightBlue};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${(props) => props && props.bg}) center/cover no-repeat;
    opacity: 0.2;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Icon = styled.div<{ bg: string }>`
  width: 2rem;
  height: 2rem;
  padding: ${paddings.xs};
  background: url(${(props) => props && props.bg}) center no-repeat;
`;

type categoryItemType = {
  id: number;
  icon: string;
  title: string;
  bgImage: string;
};

// const Banner = styled.div<{ bg: string }>`
//   width: 100%;
//   height: 12rem;
//   text-align: center;
//   background: url(${(props) => props && props.bg}) center/cover no-repeat;

const CategoryItem: React.FC<{ category: categoryItemType }> = ({
  category,
}) => {
  return (
    <Item bg={category.bgImage}>
      <Icon bg={category.icon} />
      <div>{category.title}</div>
    </Item>
  );
};

export default CategoryItem;
