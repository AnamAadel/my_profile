import FeaturedProject from "@/components/home/FeaturedProject";
import Introduce from "@/components/home/Introduce";
import MainTag from "@/components/MainTag";
// import BgBorder from "@/components/bgBorder";

export default function Home() {
  return (
    <>
      <MainTag>
        <Introduce />
        <FeaturedProject />
      </MainTag>
    </>
  );
}
