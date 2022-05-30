import Header from "../common/header/Header";
import TopSection from "../top-section/TopSection";
import WorksList from "../works/works-list/WorksList";
import Clients from "../clients/Clients";
import Footer from "../common/footer/Footer";
import { Wrapper } from "./style";

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <TopSection />
      <WorksList />
      <Clients />
      <Footer />
    </Wrapper>
  );
};
export default Home;
