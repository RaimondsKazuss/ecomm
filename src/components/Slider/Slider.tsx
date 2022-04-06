import styled from "styled-components";
import sliderImage from "../../assets/duck-1.jpeg";

const SliderWrapper = styled.div`
  padding: 0.5rem;
  margin: auto;
  width: 100%;
  max-width: 64rem;
  height: 11rem;
  box-sizing: border-box;
`;

const Image = styled.div`
  width: 100%;
  height: 8rem;
  background: #dbe2ef url(${sliderImage}) center/cover no-repeat;
`;

const DotWrapper = styled.div`
  height: 2rem;
  display: flex;
  width: 10rem;
  margin: 0.5rem auto;
  justify-content: space-between;
`;

const Dot = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #DBE2EF;
`;

const Slider: React.FC = () => {
  return (
    <SliderWrapper>
      <Image />
      <DotWrapper>
        <Dot />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </DotWrapper>
    </SliderWrapper>
  );
};

export default Slider;
