import Banner from "../components/Banner";
import Knowledge from "../components/Knowledge";
import LanguageSkills from "../components/LanguageSkills";
import MainTag from "../components/MainTag";
import MyDesign from "../components/MyDesign";
import Objective from "../components/Objective";
import Service from "../components/Service";

function resume() {
  return (
    <>
      <MainTag>
        <Banner bannerTitle="Resume" />
        <Objective />
        <Service />
        <MyDesign />
        <LanguageSkills />
        <Knowledge />
      </MainTag>
    </>
  );
}

export default resume;
