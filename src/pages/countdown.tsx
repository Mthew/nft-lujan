import { useRef } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import { Countdown } from "@/components/ui";

const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}/images/home/${name}.png${wrap ? ")" : ""}`;

const center = {
  display: "flex",
  justifyContent: "center",
};

const Home = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <section className="w-screen h-screen">
      <Parallax
        ref={parallax}
        pages={1}
        style={{ top: 0, left: 0, background: "#235154" }}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          className="bg-[url(/images/home-header/fondo.jpg)] bg-top bg-no-repeat sm:bg-cover"
        />
        <ParallaxLayer
          offset={0.7}
          speed={0.5}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("mountain-4-w-full")}
            alt="mountain 4"
            width={500}
            height={300}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.8}
          speed={0.6}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("mountain-3-w-full")}
            alt="mountain 4"
            width={500}
            height={300}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.9}
          speed={0.7}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("mountain-2-rigth")}
            alt="mountain 4"
            width={500}
            height={300}
            className="absolute"
          />
          <Image
            src={url("mountain-2-left")}
            alt="mountain 4"
            width={500}
            height={300}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={-0.3}
          style={{
            ...center,
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("plane")}
            alt="mountain 4"
            width={200}
            height={100}
            className="absolute"
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.4}
          speed={0.2}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("clouds-full")}
            alt="mountain 4"
            width={900}
            height={50}
            className="absolute"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0}>
          <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leadi sm:text-5xl text-white uppercase">
              Somos{" "}
              <span className="bg-gradient-to-r from-violet-200 to-pink-200 bg-clip-text text-transparent">
                seres
              </span>{" "}
              <span className="bg-gradient-to-r from-slate-500 to-slate-800 bg-clip-text text-transparent">
                coexistiendo
              </span>{" "}
              en una misma{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                ilusión
              </span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              experimentando diferentes perspectivas de la misma realidad
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={10} factor={1}>
          <div className="w-screen h-screen  flex font-bold items-center justify-center">
            <div className="w-3/4 py-8 text-center backdrop-blur-sm backdrop-invert bg-violet/30 border-2 border-white cursor-pointer">
              <Countdown
                timeTillDate="07 29 2023, 6:00 am"
                timeFormat="MM DD YYYY, h:mm a"
                title={
                  <>
                    <Image
                      src={url("title")}
                      alt="mountain 4"
                      width={200}
                      height={50}
                      style={center}
                      className="m-auto py-5"
                    />
                    <h1 className="uppercase">Gran lanzamiento</h1>
                  </>
                }
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={15}
          sticky={{ start: 0.7, end: -0.5  }}
          factor={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            pointerEvents: "none",
          }}
        >
          <Image
            src={url("nfts")}
            alt="mountain 4"
            width={900}
            height={500}
            className="absolute"
          />
        </ParallaxLayer>
      </Parallax>
    </section>
  );
};

export default Home;
