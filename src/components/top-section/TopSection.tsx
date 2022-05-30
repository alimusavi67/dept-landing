import Button from "../common/button/Button";
import {
  Wrapper,
  WrapperWithBackImg,
  StyledH1,
  MobileBtnWrapper,
  DesktopBtnWrapper,
} from "./style";

const TopSection = () => {
  return (
    <Wrapper>
      <WrapperWithBackImg>
        <StyledH1>WORK</StyledH1>
        <DesktopBtnWrapper>
          <Button text="VIEW CASE" size="SMALL" />
        </DesktopBtnWrapper>
      </WrapperWithBackImg>
      <MobileBtnWrapper>
        <Button text="VIEW CASE" size="FULL" />
      </MobileBtnWrapper>
    </Wrapper>
  );
};

export default TopSection;
