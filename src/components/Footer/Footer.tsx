import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 6rem;
  position: absolute;
  bottom: 0;
  text-align: center;
`;

const Icons = styled.div`
  width: 8rem;
  height: 2rem;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.a`
  width: 2rem;
  height: 2rem;

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Icons>
        <Icon href="/fb" target="_blank">
          <img src={require("../../assets/fb-logo.png")} alt="" />
        </Icon>
        <Icon href="/tw" target="_blank">
          <img src={require("../../assets/tw-logo.png")} alt="" />
        </Icon>
        <Icon href="/inst" target="_blank">
          <img src={require("../../assets/inst-logo.png")} alt="" />
        </Icon>
      </Icons>
      <div>© 2022 Raimonds Kazušs</div>
    </StyledFooter>
  );
};

export default Footer;
