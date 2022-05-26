import { Wrapper, RowWrapper } from "./style";
import logoWhite from '../../../assets/images/logo/logo-white.svg'
import closeIcon from '../../../assets/images/close.svg'
import MenuItem from "./menu-item/MenuItem";

type Props = {
    isOpen: boolean;
    onClick: () => void;
}

const Menu: React.FC<Props> = ({isOpen = false, onClick}) => {
    return (
        <>
        {isOpen && (<Wrapper>

            <RowWrapper>
                <img src={logoWhite} alt="logo-white" />
                <img src={closeIcon} alt="close" onClick={onClick} style={{cursor: 'pointer'}} />
            </RowWrapper>
            <MenuItem name="HOME" />
            <MenuItem name="WORK" />
            <MenuItem name="CULTURE" />
            <MenuItem name="SERVICES" />
            <MenuItem name="PARTNERS" />
            <MenuItem name="STORIES" />
            <MenuItem name="CAREERS" />
            <MenuItem name="EVENTS" />
            <MenuItem name="EVENTS" />
            <MenuItem name="CONTACT" lastItem />
        </Wrapper>)}
        </>
    )
}

export default Menu;