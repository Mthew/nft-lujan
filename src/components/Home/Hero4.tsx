import { useState, useEffect } from "react";

import { url } from "@/utils";

//Componenets
import { Button } from "@nextui-org/react";

//Styles
import styles from "./styles/Hero.module.css";

const Hero4 = () => {
  const [positions, setPositions] = useState<any>({});
  const handleScroll: any = (e: any) => {
    const y = window.scrollY;
    setPositions({
      montana6: { bottom: y * 0.15 },
      montana5: { bottom: y * 0.12 },
      montana4: { left: y * 0.05 },
      montana3: { right: y * 0.05 },
      nft1: {},
      nft2: {},
      nft3: {},
      nft4: {},
      title: { top: y * 0.5 },
      montana2: { left: y * 0.15 },
      montana1: { right: y * 0.15 },
      avion: { right: y * 0.16, top: y * 0.15 },
      nubes2: { right: y * 0.1 },
      nubes1: { left: y * 0.16 },
      pajaros: { left: y * 0.05, bottom: y * 0.5 },
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <section
      className={`${styles.hero} max-lg:bg-[url(/images/home-header/fondo.jpg)] lg:bg-[url(/images/home/sky.png)] bg-top bg-no-repeat sm:bg-cover`}
    >
      <div
        id={styles.montana6}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-6", true),
          ...positions?.montana6,
        }}
      ></div>
      <div
        id={styles.montana5}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-5", true),
          ...positions?.montana5,
        }}
      ></div>
      <div
        id={styles.montana4}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-4", true),
          ...positions?.montana4,
        }}
      ></div>
      <div
        id={styles.montana3}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-3", true),
          ...positions?.montana3,
        }}
      ></div>
      <div
        id={styles.title}
        className={`${styles.layer}`}
        style={{ backgroundImage: url("titulo", true), ...positions?.title }}
      ></div>
      <div
        id={styles.nft3}
        className={`${styles.layer} ${styles.nft}`}
        style={{ backgroundImage: url("nft3", true), ...positions?.nft3 }}
      ></div>
      <div
        id={styles.nft4}
        className={`${styles.layer} ${styles.nft}`}
        style={{ backgroundImage: url("nft4", true), ...positions?.nft4 }}
      ></div>
      <div
        id={styles.nft2}
        className={`${styles.layer} ${styles.nft}`}
        style={{ backgroundImage: url("nft2", true), ...positions?.nft2 }}
      ></div>
      <div
        id={styles.nft1}
        className={`${styles.layer} ${styles.nft}`}
        style={{ backgroundImage: url("nft1", true), ...positions?.nft1 }}
      ></div>
      <div
        id={styles.montana2}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-2", true),
          ...positions?.montana2,
        }}
      ></div>
      <div
        id={styles.montana1}
        className={`${styles.layer}`}
        style={{
          backgroundImage: url("montanas-1", true),
          ...positions?.montana1,
        }}
      ></div>
      <div
        id={styles.avion}
        className={`${styles.layer}`}
        style={{ backgroundImage: url("avion-2", true), ...positions?.avion }}
      ></div>
      <div
        id={styles.nubes2}
        className={`${styles.layer} ${styles.nubes}`}
        style={{ backgroundImage: url("nubes-2", true), ...positions?.nubes2 }}
      ></div>
      <div
        id={styles.nubes1}
        className={`${styles.layer}  ${styles.nubes}`}
        style={{ backgroundImage: url("nubes-1", true), ...positions?.nubes1 }}
      ></div>
      <div
        id={styles.pajaros}
        className={`${styles.layer}`}
        style={{ backgroundImage: url("pajaros", true), ...positions?.pajaros }}
      ></div>
      <div className="flex flex-col items-center justify-end h-screen pb-16">
        <Button color="default">Discord</Button>
        <Button color="primary">OpenSea</Button>
      </div>
    </section>
  );
};

export default Hero4;
