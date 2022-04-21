import styled from "styled-components";
import sliderImage from "../../assets/duck-1.jpeg";
import { colors, fontSizes, margins, paddings } from "../../theme/theme";

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
  margin: auto;
  width: 100%;
  max-width: 64rem;
  height: 11rem;
  box-sizing: border-box;
`;

const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 8rem;
  text-align: center;
  background: #dbe2ef url(${sliderImage}) center/cover no-repeat;
  background: url(${(props) => props && props.bg}) center/contain no-repeat;

  h3 {
    font-size: ${fontSizes.lg};
    color: ${colors.lightBlue};
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

const DotWrapper = styled.div`
  height: 2rem;
  display: flex;
  width: 10rem;
  margin: ${margins.xs} auto;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${colors.bg};
`;

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevHandler = () => {
    setCurrentSlide(
      currentSlide > 0 ? currentSlide - 1 : sliderData.length - 1
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
      <button onClick={prevHandler}>prev</button>
      <button>next</button>
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
