import styled from "styled-components";

const Wrapper = styled.nav`
    width: 100;
    background: #000000;
    height: 100vh;
    overflow: scroll;
    position: fixed;
    width: 100vw;
    left: 0;
    top: 0;
    right: 0;
    padding: 3rem 3.6rem;
`
const RowWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export {Wrapper, RowWrapper}