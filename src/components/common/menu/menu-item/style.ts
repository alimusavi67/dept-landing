import styled from "styled-components";

interface IWrapper {
  lastItem?: boolean;
}

const Wrapper = styled.div<IWrapper>`
  width: 100;
  display: flex;
  justify-content: end;
  border-bottom: ${(p) => (p.lastItem ? "none" : "1px solid #A3A3A3;")};
  a {
    text-decoration: none;
    font-family: "Teko";
    font-style: normal;
    font-weight: 400;
    font-size: 6rem;
    line-height: 86px;
    display: flex;
    align-items: center;
    text-align: right;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    a {
      font-size: 5rem;
    }
  }
`;
export { Wrapper };
