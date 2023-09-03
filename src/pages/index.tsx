import { useState } from "react";

//Layout
import { MainLayout } from "@/Layouts";

//Components
import { MainHero, Hero2 } from "@/components/Home";
import DescriptionCollection from "@/components/Home/DescriptionCollection";
import { PageLoading } from "@/components/ui";
import Benefits from "@/components/Home/Benefits";
import RoadMap from "@/components/Home/RoadMap";
import Team from "@/components/Home/Team";
import Faq from "@/components/Home/Faq";
import CallToAcction from "@/components/Home/CallToAcction";
import Footer from "@/components/Home/Footer";
import NFTGallery from "@/components/Home/NFTGallery";

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);

  const hideLoading = () => setLoading(false);

  return (
    <>
      {loading && <PageLoading time={10} onFinish={hideLoading} />}
      <MainLayout>
        <MainHero />
        <Hero2 />
        <h1>DESCRIPTION</h1>
        {/* <DescriptionCollection /> */}
        <Benefits></Benefits>
        <RoadMap></RoadMap>
        <NFTGallery></NFTGallery>
        <Team></Team>
        <Faq></Faq>
        <CallToAcction></CallToAcction>
        <Footer></Footer>
      </MainLayout>
    </>
  );
}
