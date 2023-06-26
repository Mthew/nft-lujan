import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";

export default function MainHero() {
  const main = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {
      gsap.from("#montana6", {
        scrollTrigger: {
          scrub: true,
          trigger: "#titulo",
          toggleActions: "restart pause reverse pause",
        },
        y: 80,
      });
      gsap.from("#monatana5", {
        scrollTrigger: {
          scrub: true,
        },
        y: 30,
      });
      gsap.from("#montana4", {
        scrollTrigger: {
          scrub: true,
        },
        x: 20,
      });
      gsap.from("#montana3", {
        scrollTrigger: {
          scrub: true,
        },
        x: -60,
      });
      gsap.from("#montana2", {
        scrollTrigger: {
          scrub: true,
        },
        x: 230,
      });
      gsap.from("#montana1", {
        scrollTrigger: {
          scrub: true,
        },
        x: -160,
      });
      gsap.from("#nubes", {
        scrollTrigger: {
          scrub: true,
        },
        x: 300,
      });
      gsap.from("#titulo", {
        scrollTrigger: {
          trigger: ".nextui-navbar-container",
          // pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=1000", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
        y: 60,
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <section
        //@ts-ignore
        ref={main}
        className={`${styles.parallax} w-screen h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-400 via-sky-600 to-blue-900`}
      >
        <img
          id="montana6"
          className={styles.montana6}
          src="/images/home-header/montanas-6.png"
          alt=""
        />
        <img id="montana5" src="/images/home-header/montanas-5.png" alt="" />
        <img id="nubes2" src="/images/home-header/nubes-2.png" alt="" />
        <img
          id="titulo"
          className={styles.titulo}
          src="/images/home-header/titulo.png"
          alt=""
        />
        <img id="montana4" src="/images/home-header/montanas-4.png" alt="" />
        <img id="montana3" src="/images/home-header/montanas-3.png" alt="" />
        <img id="nft1" src="/images/home-header/nft1.png" alt="" />
        <img id="nft2" src="/images/home-header/nft2.png" alt="" />
        <img id="nft3" src="/images/home-header/nft3.png" alt="" />
        <img id="nft4" src="/images/home-header/nft4.png" alt="" />
        <img id="montana2" src="/images/home-header/montanas-2.png" alt="" />
        <img id="montana1" src="/images/home-header/montanas-1.png" alt="" />
        <img id="nubes1" src="/images/home-header/nubes-1.png" alt="" />
        <img id="avion" src="/images/home-header/avion-2.png" alt="" />
        <img id="pajaros" src="/images/home-header/pajaros.png" alt="" />
      </section>
  );
}
