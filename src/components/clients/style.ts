import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f4f4;
  padding: 7rem;
  @media (max-width: 768px) {
       padding: 4.5rem;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    padding: 5rem;
  }
  h1 {
    font-family: "Teko";
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 86px;
    text-align: center;
    color: #000000;
  }
  p {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #000000;
  }
  .logo-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
    img {
      width: 82px;
      height: 22px;
      margin: 50px;
      @media (max-width: 768px) {
        margin: 25px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 25px;
  }
    }
    @media (max-width: 768px) {
        width: 100%;
  }
  @media (min-width: 768px) and (max-width: 992px) {

  }
  }
`;

export { Wrapper };
