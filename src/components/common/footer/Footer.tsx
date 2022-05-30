import {Wrapper} from './style'
import whiteLogo from '../../../assets/images/logo/logo-white.svg';
import facebook from '../../../assets/images/social/facebook.svg';
import twitter from '../../../assets/images/social/twitter.svg';
import instagram from '../../../assets/images/social/instagram.svg';
const Footer = () => {
    return <Wrapper>
        <div className='links'>
            <div className='links-list'>
                <div className='logo'>
                    <img src={whiteLogo} alt="logo" />
                </div>
                <div className="routes">
                    <span>WORK</span>
                    <span>SERVICES</span>
                    <span>STORIES</span>
                    <span>ABOUT</span>
                    <span>CAREERS</span>
                    <span>CONTACT</span>
                </div>
            </div>
            <div className='socials'>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
            </div>
        </div>
        <div className='info'>
            <div className='addresses'>
                <span>Chamber of Commerce: 63464101  </span>
                <span>VAT: NL 8552.47.502.B01</span>
                <span>Terms and conditions</span>
            </div>
            <span className='copy'>
            © 2018 Dept Agency
            </span>
        </div>
    </Wrapper>
}
export default Footer;