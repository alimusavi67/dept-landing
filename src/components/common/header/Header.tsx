import { Wrapper, LogoWrapper, MenuWrapper, Container } from "./style";
import blackLogo from "../../../assets/images/logo/logo-black.png";
import hamburgerMenu from "../../../assets/images/hamburger.svg";
import Menu from "../menu/Menu";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(prev => !prev);
    }
    return (
        <Container>
            <Wrapper>
                <LogoWrapper>
                    <img src={blackLogo} alt="logo" />
                </LogoWrapper>
                <MenuWrapper onClick={openMenu}>
                    <span>MENU</span>
                    <img src={hamburgerMenu} alt="ham menu" />
                </MenuWrapper>
            </Wrapper>
            <Menu isOpen={isOpen} onClick={openMenu} />
        </Container>
    )
}
export default Header;