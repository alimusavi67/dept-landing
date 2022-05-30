import styled from "styled-components";

const Container = styled.header`
    width: 100%;
`

const Wrapper = styled.div`
    height: 54px;
    background: transparent;
    position: fixed;
    width: 85%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #0E0E0E;
    align-items: center;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    @media (max-width: 768px) {
        background: white;
        width: 100%;
        padding 0 1.6rem;
        border: none;
  }
`
const LogoWrapper = styled.div`
    width: 100px;
    height: 28px;
`
const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
        color: #000000;
        margin-right: 13px;
    }
    img {
        width: 21px;
        height: 9px;
    }
`

export {Wrapper, LogoWrapper, MenuWrapper, Container};