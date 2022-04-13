import styled from "styled-components";
import sliderImage from "../../assets/duck-1.jpeg";
import { colors, fontSizes, margins, paddings } from "../../theme/theme";

const SliderWrapper = styled.div`
  padding: ${paddings.xs};
  margin: auto;
  width: 100%;
  max-width: 64rem;
  height: 11rem;
  box-sizing: border-box;
`;

const Banner = styled.div`
  width: 100%;
  height: 8rem;
  text-align: center;
  background: #dbe2ef url(${sliderImage}) center/cover no-repeat;

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
  return (
    <SliderWrapper>
      <Banner>
        <h3>BANNER TITLE</h3>
      </Banner>
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
