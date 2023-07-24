import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "@/styles/Home.module.css";

const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}/images/home-header/${name}.png${wrap ? ")" : ""}`;

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
        y: 100,
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
      <Image
        id="montana6"
        loading="lazy"
        src={url("montanas-6")}
        alt="mountain 4"
        width={1123}
        height={631}
        className={styles.montana6}
      />
      <Image
        id="montana5"
        loading="lazy"
        src={url("montanas-5")}
        alt="mountain 5"
        width={1123}
        height={631}
      />
      <Image
        id="nubes2"
        loading="lazy"
        src={url("nubes-2")}
        alt="nubes 2"
        width={1123}
        height={631}
      />

      <Image
        id="titulo"
        className={styles.titulo}
        src={url("titulo")}
        alt="Titulo"
        width={1123}
        height={631}
      />
      <Image
        id="montana4"
        src={url("montanas-4")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="montana3"
        src={url("montanas-3")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="nft1"
        src={url("nft1")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="nft2"
        src={url("nft2")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="nft3"
        src={url("nft3")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="nft4"
        src={url("nft4")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="montana2"
        src={url("montanas-2")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="montana1"
        src={url("montanas-1")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="nubes1"
        src={url("nubes-1")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="avion"
        src={url("avion-2")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
      <Image
        id="pajaros"
        src={url("pajaros")}
        alt=""
        loading="lazy"
        width={1123}
        height={631}
      />
    </section>
  );
}
