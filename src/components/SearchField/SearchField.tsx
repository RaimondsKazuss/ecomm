import styled from "styled-components";
import { colors } from "../../theme/theme";
import searchIcon from "../../assets/icon-search.svg";

const SearchFieldWrapper = styled.div`
  min-width: 2rem;
  height: 2rem;
  position: relative;
  flex: 3;
  text-align: right;
`;

const SearchInput = styled.input`
  display: none;
  height: 2rem;
  border: 1px solid ${colors.lightBlue};

  &:focus-visible {
    border: 1px solid ${colors.darkBlue};
    border-radius: 0;
  }

  @media (min-width: 430px) {
    display: inline-block;
  }
`;

const SearchIcon = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  right: 0.5rem;
  top: 0.1rem;
  background: url(${searchIcon}) center/contain no-repeat;
`;

const SearchField: React.FC = () => {
  return (
    <SearchFieldWrapper>
      <SearchInput type="text" />
      <SearchIcon />
    </SearchFieldWrapper>
  );
};

export default SearchField;
