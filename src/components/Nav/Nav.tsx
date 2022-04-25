import styled from "styled-components";
import SearchField from "../SearchField/SearchField";
import bgImage from "../../assets/logo-128.png";
import { paddings, shadows, margins } from "../../theme/theme";
import menuIcon from "../../assets/icon-menu.svg";
import emptyBagIcon from "../../assets/icon-bag-empty.svg";
import emptyHeartIcon from "../../assets/icon-heart-empty.svg";
import personIcon from "../../assets/icon-person.svg";

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

const SideBarToggleBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin-left: ${margins.sm};
  background: url(${menuIcon}) center/contain no-repeat;
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
  max-width: 10rem;
  text-align: right;
  display: flex;
  justify-content: space-around;

  @media (min-width: 430px) {
    text-align: unset;
  }
`;

const NavButton = styled.button<{ icon: string }>`
  width: 2rem;
  height: 2rem;
  display: inline-block;
  background: url(${(props) => props && props.icon}) center/contain no-repeat;
`;

const UserBtn = styled(NavButton)`
  display: none;

  @media (min-width: 430px) {
    display: inline-block;
  }
`;

const Nav: React.FC<{ toggleSideBar: () => void }> = ({ toggleSideBar }) => {
  const clickHandler = () => toggleSideBar();

  return (
    <StyledNav>
      <HomeBtn href="/" />
      <SideBarToggleBtn onClick={clickHandler} />
      <SearchField />
      <BtnWrapper>
        <UserBtn icon={personIcon} />
        <NavButton icon={emptyHeartIcon} />
        <NavButton icon={emptyBagIcon} />
      </BtnWrapper>
    </StyledNav>
  );
};

export default Nav;
