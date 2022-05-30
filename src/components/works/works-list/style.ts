import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  .description {
      display: flex;
      align-items: center;
      width: 80%;
      flex-direction: column;
      p {
        font-family: 'Teko';
font-style: normal;
font-weight: 400;
font-size: 36px;
line-height: 52px;
text-align: center;
color: #0E0E0E;
      }
      span {
        font-family: 'Arial';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 15px;
color: #272727;
      }
  }
`;
export { Wrapper };
