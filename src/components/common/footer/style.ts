import styled from "styled-components";

const Wrapper = styled.footer`
  height: 310px;
  width: 100%;
  left: 0px;
  background: #0e0e0e;
  display: flex;
  flex-direction: column;
  padding: 7rem 3.6rem;
  @media (max-width: 768px) {
    height: auto;
  padding: 4.5rem 3.6rem;
        }
  .links {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50%;
    .links-list {
      display: flex;
      justify-content: space-between;
      width: 50%;
      align-items: center;
      .routes {
        display: flex;
        justify-content: space-between;
        width: 60%;
        @media (max-width: 768px) {
       flex-direction: column;
        }
      }
      .logo {
        @media (max-width: 768px) {
          display: none;
        }
      }
    }
    span {
      font-family: "Teko";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      /* identical to box height */

      /* FWhite */

      color: #ffffff;
    }
    .socials {
      display: flex;
      justify-content: space-between;
      width: 7%;
      @media (max-width: 768px) {
       flex-direction: column;
        }
    }
  }
  .info {
    height: 50%;
    width: 100%;
    border-top: 1px solid #3e3e3e;
    transform: matrix(1, 0, 0, 1, 0, 0);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 4.5rem;
    @media (max-width: 768px) {
        flex-direction: column;
    padding: 3.6rem 0;

        }
    .addresses {
      display: flex;
      justify-content: space-between;
      width: 50%;
      @media (max-width: 768px) {
        flex-direction: column;
      width: 100%;
        }
      span {
        font-family: "Arial";
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        color: #808080;
      }
    }
    .copy {
      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #808080;
      @media (max-width: 768px) {
        margin-top: 2.5rem;
        }
    }
  }
`;
export { Wrapper };
