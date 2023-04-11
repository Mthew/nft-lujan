import { useLayoutEffect, useRef } from "react";
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ConnectButton from "../components/ConnectButton";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";


export default function HomePage() {
  const main = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context((self) => {      
      gsap.from("#mountain5center", {
        scrollTrigger: {
          scrub: true,
          trigger: "#mountain5center",
          toggleActions: "restart pause reverse pause"
        },
        y: 40,
      });
      gsap.from("#mountain4center", {
        scrollTrigger: {
          scrub: true,
        },
        y: 30,
      });
      gsap.from("#mountain3rigth", {
        scrollTrigger: {
          scrub: true,
        },
        x: 20,
      });
      gsap.from("#mountain3left", {
        scrollTrigger: {
          scrub: true,
        },
        x: -60,
      });
      gsap.from("#mountain2rigth", {
        scrollTrigger: {
          scrub: true,
        },
        x: 230,
      });      
      gsap.from("#mountain2left", {
        scrollTrigger: {
          scrub: true,
        },
        x: -160,
      });     
      gsap.from("#rama1rigth", {
        scrollTrigger: {
          scrub: true,
        },
        x: 300,
      });  
      gsap.from("#rama1left", {
        scrollTrigger: {
          scrub: true,
        },
        x: -200,
      });     
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  return (
    <>
      <section
        //@ts-ignore
        ref={main}
        className={`${styles.parallax} w-screen h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-400 via-sky-600 to-blue-900`}
      >
        <h1 className={styles.title} id="title">
          LUJANS CLUB NFTs COLLECTIBLES
        </h1>
        <img
          id="mountain5center"
          src="/images/home-header/mountain5center.png"
          alt=""
        />
        <img
          id="mountain4center"
          src="/images/home-header/mountain4center.png"
          alt=""
        />
        <img
          id="mountain3rigth"
          src="/images/home-header/mountain3rigth.png"
          alt=""
        />
        <img
          id="mountain3left"
          src="/images/home-header/mountain3left.png"
          alt=""
        />
        <img
          id="mountain2rigth"
          src="/images/home-header/mountain2rigth.png"
          alt=""
        />
        <img
          id="mountain2left"
          src="/images/home-header/mountain2left.png"
          alt=""
        />
        <img id="rama1rigth" src="/images/home-header/rama1rigth.png" alt="" />
        <img id="rama1left" src="/images/home-header/rama1left.png" alt="" />
      </section>
      <section className={styles.info}>
        <h2>Descripcion de la collecion</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          repellat accusantium at autem praesentium voluptas, iure nihil! Fugit
          alias tempora eos! Quod quisquam numquam cumque rem inventore dolores
          eum voluptatibus! Quae officiis doloribus, quia repellendus nobis
          omnis? Quae dolores exercitationem ea aliquam, in ratione sapiente
          minus vitae adipisci similique explicabo pariatur recusandae, corrupti
          molestiae fugiat sit natus ab, nobis magnam. Eos debitis ut laboriosam
          laudantium earum voluptatem aut quod voluptate deleniti praesentium,
          facilis minima, magni reprehenderit quidem voluptates voluptas numquam
          temporibus sint eligendi accusamus voluptatibus sit quo. Quo, officiis
          voluptas? Voluptates, nostrum eos et, consequuntur placeat modi fuga
          repellendus tempora vitae libero, assumenda delectus cupiditate
          tenetur repudiandae quo est accusamus optio minus iure ratione
          perspiciatis pariatur ducimus culpa eaque? Incidunt. Impedit quasi
          alias sequi provident ratione eaque, tempora sint suscipit pariatur.
          Blanditiis a, sapiente accusamus dolorum harum mollitia rerum dicta,
          eius, odio hic eaque aliquam laudantium! Expedita suscipit saepe
          ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          repellat accusantium at autem praesentium voluptas, iure nihil! Fugit
          alias tempora eos! Quod quisquam numquam cumque rem inventore dolores
          eum voluptatibus! Quae officiis doloribus, quia repellendus nobis
          omnis? Quae dolores exercitationem ea aliquam, in ratione sapiente
          minus vitae adipisci similique explicabo pariatur recusandae, corrupti
          molestiae fugiat sit natus ab, nobis magnam. Eos debitis ut laboriosam
          laudantium earum voluptatem aut quod voluptate deleniti praesentium,
          facilis minima, magni reprehenderit quidem voluptates voluptas numquam
          temporibus sint eligendi accusamus voluptatibus sit quo. Quo, officiis
          voluptas? Voluptates, nostrum eos et, consequuntur placeat modi fuga
          repellendus tempora vitae libero, assumenda delectus cupiditate
          tenetur repudiandae quo est accusamus optio minus iure ratione
          perspiciatis pariatur ducimus culpa eaque? Incidunt. Impedit quasi
          alias sequi provident ratione eaque, tempora sint suscipit pariatur.
          Blanditiis a, sapiente accusamus dolorum harum mollitia rerum dicta,
          eius, odio hic eaque aliquam laudantium! Expedita suscipit saepe
          ratione.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          repellat accusantium at autem praesentium voluptas, iure nihil! Fugit
          alias tempora eos! Quod quisquam numquam cumque rem inventore dolores
          eum voluptatibus! Quae officiis doloribus, quia repellendus nobis
          omnis? Quae dolores exercitationem ea aliquam, in ratione sapiente
          minus vitae adipisci similique explicabo pariatur recusandae, corrupti
          molestiae fugiat sit natus ab, nobis magnam. Eos debitis ut laboriosam
          laudantium earum voluptatem aut quod voluptate deleniti praesentium,
          facilis minima, magni reprehenderit quidem voluptates voluptas numquam
          temporibus sint eligendi accusamus voluptatibus sit quo. Quo, officiis
          voluptas? Voluptates, nostrum eos et, consequuntur placeat modi fuga
          repellendus tempora vitae libero, assumenda delectus cupiditate
          tenetur repudiandae quo est accusamus optio minus iure ratione
          perspiciatis pariatur ducimus culpa eaque? Incidunt. Impedit quasi
          alias sequi provident ratione eaque, tempora sint suscipit pariatur.
          Blanditiis a, sapiente accusamus dolorum harum mollitia rerum dicta,
          eius, odio hic eaque aliquam laudantium! Expedita suscipit saepe
          ratione.
        </p>
      </section>
    </>
  );
}
