import styled from "styled-components";
import SearchField from "../SearchField/SearchField";
import bgImage from "../../assets/logo-128.png";
import { paddings, shadows } from "../../theme/theme";

const StyledNav = styled.header`
  box-shadow: ${shadows.default};
  width: 100%;
  height: 4rem;
  padding: ${paddings.xs};
  position: sticky;
  top: 0;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

const HomeBtn = styled.a`
  width: 3rem;
  height: 3rem;
  max-width: 3rem;
  flex: 1;
  background: url(${bgImage}) center/contain no-repeat;
  text-align: right;
`;

const BtnWrapper = styled.div`
  flex: 1;
  min-width: 6rem;
  text-align: right;

  @media (min-width: 430px) {
    min-width: 11rem;
    display: inline-block;
    text-align: unset;
  }
`;

const NavButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: inline-block;
  background: none;
  border: none;
`;

const UserBtn = styled(NavButton)`
  display: none;

  @media (min-width: 430px) {
    display: inline-block;
  }
`;

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <HomeBtn href="/" />
      <SearchField />
      <BtnWrapper>
        <UserBtn>👤</UserBtn>
        <NavButton>🤍</NavButton>
        <NavButton>🛒</NavButton>
      </BtnWrapper>
    </StyledNav>
  );
};

export default Nav;
