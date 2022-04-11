import styled from "styled-components"
import { colors, devices, shadows, zIndexes } from "../../theme/theme"

const StyledSideBar = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background: ${colors.lightBlue};
    z-index: ${zIndexes.sideBar};
    box-shadow: ${shadows.default}

    ${devices.mobile} {
        max-width: 20rem;
    }
`

const MenuItems = styled.ul`
    padding: 0;
    list-style-type: none;
`

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
`

const SideBar:React.FC = () => {
    return (
        <StyledSideBar>
        <MenuItems>
            <MenuItem>menu item 1</MenuItem>
            <MenuItem>menu item 1</MenuItem>
            <MenuItem>menu item 1</MenuItem>
            <MenuItem>menu item 1</MenuItem>
            <MenuItem>menu item 1</MenuItem>
        </MenuItems>
        </StyledSideBar>
        
    )
}

export default SideBar