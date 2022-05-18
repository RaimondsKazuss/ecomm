import styled from "styled-components";
import { colors } from "../../theme/theme";

const StyledLoader = styled.div`
  display: block;
  width: 5rem;
  height: 5rem;
  margin: auto;

  &:after {
    content: "";
    display: block;
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
    border-radius: 50%;
    border: 0.5rem solid ${colors.darkBlue};
    border-color: ${colors.darkBlue} transparent ${colors.darkBlue} transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const Loader: React.FC = () => <StyledLoader />;

export default Loader;
