//Layout
import { MainLayout } from "@/Layouts";

//Components
import { MainHero } from "@/components/Home";
import DescriptionCollection from "@/components/Home/DescriptionCollection";

export default function HomePage() {
  return (
    <MainLayout>
      <MainHero />
      {/* DESCRIPTION PROJECT SECTION */}
      {/* SMALL GALLERY OF SOME NFT's */}
      <DescriptionCollection />
      
      <section></section>
      {/* ROADMAP */}
      {/* TEAM */}
      {/* FAQ */}
      {/* GO TO ACTION */}
      {/* FOOTER */}
    </MainLayout>
  );
}
