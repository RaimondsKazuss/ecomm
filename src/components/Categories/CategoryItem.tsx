import styled from "styled-components";

const Item = styled.div`
  margin: 0.5rem;
  height: 3rem;
  min-width: 2rem;
  width: 44%;
  background: #dbe2ef;
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
