import { Wrapper, LogoWrapper, MenuWrapper } from "./style";
import blackLogo from "../../../assets/images/logo/logo-black.png";
import hamburgerMenu from "../../../assets/images/hamburger.svg";

const Header = () => {
    return <Wrapper>
        <LogoWrapper>
        <img src={blackLogo} alt="logo" />
        </LogoWrapper>
        <MenuWrapper>
            <span>MENU</span>
            <img src={hamburgerMenu} alt="ham menu" />
        </MenuWrapper>
    </Wrapper>
}
export default Header;