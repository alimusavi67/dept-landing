import { Wrapper } from './style';
type Props = {
    name: string;
    lastItem?: boolean;
}

const MenuItem: React.FC<Props> = ({ name, lastItem = false }) => {
    return <Wrapper lastItem={lastItem}>
        <a href='#'>{name}</a></Wrapper>
}
export default MenuItem;