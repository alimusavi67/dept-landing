import Work from "../work/Work";
import { Wrapper } from "./style";
const WorksList = () => {
  return (
    <Wrapper style={{ padding: "0 3.6rem" }}>
      <Work
        title="BOL.COM"
        description="A Summer island in the Netherlands"
        image="bool.png"
      />
      <Work
        title="KEMPEN"
        description="Not some average banking website"
        image="kempen.png"
      />
      <Work
        title="PHILIPS"
        description="Beautiful design meets innovative technology"
        image="philips.png"
      />
      <Work
        title="GEMEENTEMUSEUM"
        description="A 100 years of Mondriaan & De Stijl"
        image="GEMEENTEMUSEUM.png"
      />
      {/* <Work
        title="FLORENSIS"
        description="Rethinking the entire online ecosystem"
        image="florensis.png"
      /> */}
      <Work
        title="CHOCOMEL"
        description="A campaign for the limited edition letter packs"
        image="chocomel.png"
      />
      <Work
        title="JBL"
        description="Live like a champion with Jerome Boateng"
        image="jbl.png"
      />
      <Work
        title="ZALANDO"
        description="Innovative SEO and content strategy for Zalando"
        image="zalando.png"
      />
      <Work
        title="KONINKLIJKE BIBLIOTHEEK"
        description="The search of the most influential book ever"
        image="KONINKLIJKE BIBLIOTHEEK.png"
      />
      <div className="description">
          <p>“Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month”</p>
          <span>MATTIJS TEN BRINK - CEO, TRANSAVIA</span>
      </div>
      <Work
        title="LIBERTY GLOBAL"
        description="Delivering complex commerce solutions"
        image="library.png"
      />
          <Work
        title="ARLA"
        description="Swipe to find your next holiday destination"
        image="arla.png"
      />
    </Wrapper>
  );
};

export default WorksList;
