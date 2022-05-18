import { useState } from "react";
import styled from "styled-components";
import { colors, fontSizes, paddings } from "../../theme/theme";
import arrowL from "../../assets/icon-arrow-l.svg";
import arrowR from "../../assets/icon-arrow-r.svg";

const sliderData = [
  {
    id: 1,
    img: "http://localhost:1337/uploads/pexels_pixabay_235621_4822e7ac62.jpg",
    title: "slide 1 title",
    url: "/slide1",
  },
  {
    id: 2,
    img: "http://localhost:1337/uploads/pexels_eberhard_grossgasteiger_1287145_e1cb80f8af.jpg",
    title: "slide 2 title",
    url: "/slide2",
  },
  {
    id: 3,
    img: "http://localhost:1337/uploads/pexels_eberhard_grossgasteiger_572897_a84884a931.jpg",
    title: "slide 3 title",
    url: "/slide3",
  },
  {
    id: 4,
    img: "http://localhost:1337/uploads/pexels_andy_vu_3484061_03be16c1fc.jpg",
    title: "slide 4 title",
    url: "/path4",
  },
  {
    id: 5,
    img: "http://localhost:1337/uploads/pexels_eberhard_grossgasteiger_691668_aeb1030a36.jpg",
    title: "slide 5 title",
    url: "/slide5",
  },
  {
    id: 4,
    img: "http://localhost:1337/uploads/pexels_lumn_167699_4f1843e170.jpg",
    title: "slide 6 title",
    url: "/slide6",
  },
];

const SliderWrapper = styled.div`
  position: relative;
  margin: 3rem auto;
  width: 100%;
  max-width: 64rem;
  height: 12rem;
  box-sizing: border-box;
`;

const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 12rem;
  text-align: center;
  background: url(${(props) => props && props.bg}) center/cover no-repeat;

  h3 {
    font-size: ${fontSizes.lg};
    color: ${colors.bg};
    font-weight: 700;
    margin: 0;
    padding: 5rem 0;
  }
`;

const NavButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 40%;
  width: 2rem;
  height: 2rem;
  padding: ${paddings.md};
  background: ${colors.bg} url(${arrowR}) center/30% no-repeat;
  border-radius: 50%;
  right: 2rem;
  ${(props) =>
    props &&
    props.left &&
    `
    background-image: url(${arrowL});
    left: 2rem;
    right: unset; 
  `}
`;

// const DotWrapper = styled.div`
//   height: 2rem;
//   display: flex;
//   width: 10rem;
//   margin: ${margins.xs} auto;
//   justify-content: space-between;
// `;

// const Dot = styled.div`
//   width: 1rem;
//   height: 1rem;
//   border-radius: 50%;
//   background: ${colors.bg};
// `;

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevHandler = () => {
    setCurrentSlide(
      currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1
    );
  };

  const nextHandler = () => {
    setCurrentSlide(
      currentSlide === sliderData.length - 1 ? 0 : currentSlide + 1
    );
  };

  return (
    <SliderWrapper>
      <Banner
        key={sliderData[currentSlide].id}
        bg={sliderData[currentSlide].img}
      >
        <h3>{sliderData[currentSlide].title}</h3>
      </Banner>
      <NavButton left onClick={prevHandler} />
      <NavButton onClick={nextHandler} />
    </SliderWrapper>
  );
};

export default Slider;
