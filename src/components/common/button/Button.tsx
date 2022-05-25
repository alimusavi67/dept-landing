import styled from "styled-components";

type Props = {
    text: string;
    size: 'FULL' | 'SMALL',
    backgroundColor?: string,
    color?: string,
    onClick?: (e?: any) => void,
}
interface StyledButtonProps {
    size: 'FULL' | 'SMALL',
    backgroundColor?: string,
    color?: string,
}

const StyledButton = styled.button<StyledButtonProps>`
    background: ${p => p.backgroundColor};
    color: ${p => p.color};
    width: ${p => p.size === 'FULL' ? '100%' : '169px'};
    height: 55px;
`

const Button: React.FC<Props> = ({text, size, color="white", backgroundColor= 'black', onClick}) => {
    return <StyledButton size={size} color={color} backgroundColor={backgroundColor}>{text}</StyledButton>
}
export default Button;