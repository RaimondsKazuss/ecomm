import React from "react";
import styled from "styled-components";

import { colors, devices, margins, shadows, zIndexes } from "../../theme/theme";
import iconX from "../../assets/icon-x.svg";

const Backdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(34, 34, 34, 0.2);
  z-index: ${zIndexes.sideBar};
`;

const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: ${margins.sm};
  right: ${margins.sm};
  border: none;
  background: url(${iconX}) center/contain no-repeat;
`;

const StyledSideBar = styled.div`
  width: calc(100% - 4rem);
  height: 100vh;
  background: ${colors.lightBlue};
  box-shadow: -2px 10px 15px -5px rgb(0 0 0 / 70%);

  ${devices.mobile} {
    max-width: 20rem;
  }
`;

const MenuItems = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const MenuItem = styled.li`
  width: 100%;
  height: 2rem;
  background: ${colors.bg};
  border-bottom: 1px solid ${colors.lightBlue};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

const SideBar: React.FC<{ toggleFn: () => void }> = ({ toggleFn }) => {
  const toggleSideBar = (event: React.MouseEvent<HTMLButtonElement>) => {
    //TODO: fix event propagation for
    // event.stopPropagation();
    toggleFn();
  };

  return (
    <Backdrop>
      <CloseButton onClick={toggleSideBar} />
      <StyledSideBar>
        <MenuItems>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem>menu item 1</MenuItem>
          <MenuItem>menu item 1</MenuItem>
        </MenuItems>
      </StyledSideBar>
    </Backdrop>
  );
};

export default SideBar;
