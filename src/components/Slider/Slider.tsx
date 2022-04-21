import styled from "styled-components";
import { colors, fontSizes, paddings } from "../../theme/theme";
import arrowL from "../../assets/icon-arrow-l.svg";
import arrowR from "../../assets/icon-arrow-r.svg";

//image import for app POC demonstration purposes
import slide1 from "../../assets/slides/slide_1.jpg";
import slide2 from "../../assets/slides/slide_2.jpg";
import slide3 from "../../assets/slides/slide_3.jpg";
import slide4 from "../../assets/slides/slide_4.jpg";
import { useState } from "react";

const sliderData = [
  {
    id: 1,
    img: slide1,
    title: "slide 1 title",
    url: "/path1",
  },
  {
    id: 2,
    img: slide2,
    title: "slide 2 title",
    url: "/path2",
  },
  {
    id: 3,
    img: slide3,
    title: "slide 3 title",
    url: "/path3",
  },
  {
    id: 4,
    img: slide4,
    title: "slide 4 title",
    url: "/path4",
  },
];

const SliderWrapper = styled.div`
  padding: ${paddings.xs};
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
    color: ${colors.lightBlue};
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

const NavButton = styled.button<{ left?: boolean }>`
  position: absolute;
  top: 20%;
  width: 2rem;
  height: 2rem;
  padding: ${paddings.md};
  background: ${colors.bg} url(${arrowR}) center/30% no-repeat;
  border-radius: 50%;
  right: 1rem;
  ${(props) =>
    props &&
    props.left &&
    `
    background-image: url(${arrowL});
    left: 1rem;
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

  //TODO: slider timer function
  // setTimeout(() => nextHandler(), 5000);

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
      {/* <DotWrapper>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper> */}
    </SliderWrapper>
  );
};

export default Slider;
