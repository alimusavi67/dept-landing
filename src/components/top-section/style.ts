import styled from "styled-components";
import topImage from "../../assets/images/top.jpg";
import topMobileImage from "../../assets/images/top-mobile.jpg";

const Wrapper = styled.section`
  height: 100vh;
  max-height: 713px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 56px;
    height: auto;
  }
`;
const WrapperWithBackImg = styled.div`
  background: url(${topImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 40px;
  align-items: flex-end;
  @media (max-width: 768px) {
    background: url(${topMobileImage});
    background-size: 100% 100%;
  background-repeat: no-repeat;
  }
`;
const StyledH1 = styled.h1`
  font-size: 40rem;
  font-weight: 400;
  margin: 0;
  @media (max-width: 768px) {
    font-size: 17rem;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 27rem;
  }
`;
const DesktopBtnWrapper = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
const MobileBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 17px;
  padding: 0 16px;
  @media (min-width: 768px) {
    display: none;
  }
`;

export {
  Wrapper,
  WrapperWithBackImg,
  StyledH1,
  DesktopBtnWrapper,
  MobileBtnWrapper,
};
