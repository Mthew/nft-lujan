import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Hero.module.css";

const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}/images/home-header/${name}.png${wrap ? ")" : ""}`;

export default function MainHero() {
  const main = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".info",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.utils.toArray(".parallax").forEach((layer: any) => {
        /*Ajustar esta funcion para que reciva cualquier valor que sea compatible con scolltrigger*/
        const depth = layer.dataset.depth;
        const movement = -(layer.offsetHeight * depth);
        if (layer.dataset.depthx) {
          const x = -(layer.offsetWidth * layer.dataset.depthx);
          tl.from(layer, { y: movement, x, ease: "none" }, 0);
        } else {
          tl.from(layer, { y: movement, ease: "none" }, 0);
        }
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
      //@ts-ignore
      ref={main}
      id={"hero"}
      className={`${styles.hero} w-screen h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-400 via-sky-600 to-blue-900`}
    >
      <div
        id={styles.montana6}
        className={`${styles.layer} ${styles.montana} parallax`}
        style={{ backgroundImage: url("montanas-6", true) }}
        data-depth="-0.20"
      ></div>
      <div
        id={styles.montana5}
        className={`${styles.layer} ${styles.montana} parallax`}
        style={{ backgroundImage: url("montanas-5", true) }}
        data-depth="-0.10"
      ></div>
      <div
        id={styles.titulo}
        className={`${styles.layer} parallax`}
        style={{ backgroundImage: url("titulo", true) }}
        data-depth="-0.30"
      ></div>
      <div
        id={styles.montana4}
        className={`${styles.layer} ${styles.montana} parallax`}
        style={{ backgroundImage: url("montanas-4", true) }}
        data-depth="-0.20"
      ></div>
      <div
        id={styles.montana3}
        className={`${styles.layer} ${styles.montana} parallax`}
        style={{ backgroundImage: url("montanas-3", true) }}
        data-depth="-0.10"
      ></div>
      <div
        id={styles.nft3}
        className={`${styles.layer} ${styles.nft} parallax`}
        style={{ backgroundImage: url("nft3", true) }}
      ></div>
      <div
        id={styles.nft4}
        className={`${styles.layer} ${styles.nft} parallax`}
        style={{ backgroundImage: url("nft4", true) }}
      ></div>
      <div
        id={styles.nft2}
        className={`${styles.layer} ${styles.nft} parallax`}
        style={{ backgroundImage: url("nft2", true) }}
      ></div>
      <div
        id={styles.nft1}
        className={`${styles.layer} ${styles.nft} parallax`}
        style={{ backgroundImage: url("nft1", true) }}
      ></div>
      <div
        id={styles.montana2}
        className={`${styles.layer} parallax`}
        style={{ backgroundImage: url("montanas-2", true) }}
        data-depth="-0.10"
      ></div>
      <div
        id={styles.montana1}
        className={`${styles.layer} parallax`}
        style={{ backgroundImage: url("montanas-1", true) }}
        data-depth="-0.10"
      ></div>
      <div
        id={styles.avion}
        className={`${styles.layer} parallax`}
        style={{ backgroundImage: url("avion-2", true) }}
        data-depth="-0.66"
        data-depthX="-0.10"
      ></div>
      <div
        id={styles.nubes2}
        className={`${styles.layer} ${styles.nubes} parallax`}
        style={{ backgroundImage: url("nubes-2", true) }}
        data-depth="0.30"
      ></div>
      <div
        id={styles.nubes1}
        className={`${styles.layer}  ${styles.nubes} parallax`}
        style={{ backgroundImage: url("nubes-1", true) }}
        data-depth="0.90"
      ></div>
      <div
        id={styles.pajaros}
        className={`${styles.layer} parallax`}
        style={{ backgroundImage: url("pajaros", true) }}
        data-depth="0.50"
        data-depthX="-0.20"
      ></div>
    </section>
  );
}
