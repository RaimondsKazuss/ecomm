const Footer: React.FC = () => {
  return (
    <footer>
      <div>
        <a href="/fb" target="_blank">
          <img src={require("../../assets/fb-logo.png")} alt="" />
        </a>
        <a href="/tw" target="_blank">
          <img src={require("../../assets/fb-logo.png")} alt="" />
        </a>
        <a href="/inst" target="_blank">
          <img src={require("../../assets/fb-logo.png")} alt="" />
        </a>
      </div>
      <div>© 2022 Raimonds Kazušs</div>
    </footer>
  );
};

export default Footer;
