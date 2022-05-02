import styled from "styled-components";
import { margins, colors, fontSizes } from "../../theme/theme";

const StyledSubmitButton = styled.button`
  width: 100%;
  height: 2rem;
  margin-top: ${margins.md};
  background: ${colors.darkBlue};
  color: ${colors.bg};
  font-size: ${fontSizes.md};
  text-transform: capitalize;
`;

const SubmitButton: React.FC<{ title: string }> = ({ title }) => {
  return <StyledSubmitButton>{title}</StyledSubmitButton>;
};

export default SubmitButton;
