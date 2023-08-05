//Layout
import { MainLayout } from "@/Layouts";

//Components
import { MainHero } from "@/components/Home";
import DescriptionCollection from "@/components/Home/DescriptionCollection";
import { PageLoading } from "@/components/ui";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [loading, setLoading] = useState<boolean>(true);

  const hideLoading = () => setLoading(false);

  return (
    <>
      {loading &&  <PageLoading time={10} onFinish={hideLoading} />}
      <MainLayout>
        <MainHero />
        <DescriptionCollection />
        {/* DESCRIPTION PROJECT SECTION */}
        {/* SMALL GALLERY OF SOME NFT's */}

        <section></section>
        {/* ROADMAP */}
        {/* TEAM */}
        {/* FAQ */}
        {/* GO TO ACTION */}
        {/* FOOTER */}
      </MainLayout>
    </>
  );
}
