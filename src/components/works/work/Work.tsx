import Wrapper from "./style";
import arrowBlue from "../../../assets/images/arrow-blue.svg";
type Props = {
  title: string;
  description: string;
  image?: string;
};

const Work: React.FC<Props> = ({ title, description, image }) => {
  return (
    <Wrapper>
      {image && (
        <img
          src={require(`../../../assets/images/works/${image}`)}
          alt="bool"
        />
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <div>
        <img src={arrowBlue} alt="arrow-blue" />
        <a href="#">VIEW CASE</a>
      </div>
    </Wrapper>
  );
};
export default Work;
