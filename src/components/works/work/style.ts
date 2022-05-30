import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  width: 472px;
  height: 506px;
  margin-bottom: 48px;
  h3 {
    margin-top: 1.6rem;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 17px;
    color: #939393;
  }
  p {
    margin: 0 0 1.6rem 0;
    font-family: "Teko";
    font-style: normal;
    font-weight: 400;
    font-size: 3rem;
    line-height: 43px;
    color: #0e0e0e;
  }
  img {
    width: 100%;
    height: auto;
  }
  div {
    display: flex;
    align-items: center;
    img {
      width: 1rem;
      height: 1.22rem;
      margin-right: 1.2rem;
    }
    a {
      font-family: "Arial";
      font-style: normal;
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #1a18f7;
      text-decoration: none;
    }
  }
`;
export default Wrapper;
