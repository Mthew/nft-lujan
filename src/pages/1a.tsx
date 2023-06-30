import { useRef } from "react";
import Image from "next/image";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

const url = (name: string, wrap = false) =>
  `${wrap ? "url(" : ""}/images/home/${name}.png${wrap ? ")" : ""}`;

const center = {
  display: "flex",
  justifyContent: "center",
};

const Home = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <section className="w-screen h-screen bg-[#fff]">
      <Parallax
        ref={parallax}
        pages={2}
        style={{ top: 0, left: 0, background: "#235154" }}
      >
        <ParallaxLayer
          offset={0}
          speed={1}
          className="max-lg:bg-[url(/images/home-header/fondo.jpg)] lg:bg-[url(/images/home/sky.png)] bg-top bg-no-repeat sm:bg-cover"
        />
        <ParallaxLayer
          offset={0.7}
          speed={0.5}
          style={{
            ...center,
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("mountain-4-w-full")}
            alt="mountain 4"
            width={500}
            height={300}
            className="absolute lg:w-full"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.75}
          speed={1}
          style={{
            ...center,
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("title")}
            alt="mountain 4"
            width={500}
            height={150}
            className="absolute lg:w-full"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.8}
          speed={0.6}
          style={{
            ...center,
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("mountain-3-w-full")}
            alt="mountain 4"
            className="absolute lg:w-full"
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
            loading="lazy"
            src={url("mountain-2-rigth")}
            alt="mountain 4"
            width={500}
            height={300}
            className="absolute"
          />
          <Image
            loading="lazy"
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
            loading="lazy"
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
            ...center,
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("clouds-full")}
            alt="mountain 4"
            width={900}
            height={50}
            className="absolute"
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2}>
          <div className="bg-gradient-to-b from-neutral-900 via-neutral-900/[.5] to-neutral-900/[.0] container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 className="text-4xl font-bold leadi sm:text-5xl text-white">
              Una colección exclusiva de&nbsp;
              <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                9,999 NFTs
              </span>
              &nbsp; fusionando vida, tecnología y arte en un emocionante
              recorrido por las calles de{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Medellín
              </span>
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg">
              Obtén descuentos especiales en diversos lugares y experiencias
              para disfrutar al máximo de esta diversa ciudad.
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-blue-900 text-white-900">
                Opensea
              </button>
              <button className="px-8 py-3 m-2 text-lg font-semibold border rounded dark:text-blue-900 dark:border-gray-700">
                Discord
              </button>
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0}
          className="bg-gradient-to-b from-slate-50/[.0] via-slate-50/[.5] to-slate-50"
        />
        <ParallaxLayer
          offset={1}
          speed={0}
          className="bg-[url(/images/home/alpujarra-bg.png)] bg-top bg-no-repeat bg-cover"
          style={{
            backgroundSize: "cover !important",
          }}
        />

        <ParallaxLayer
          offset={1.3}
          speed={0.5}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("tranvia")}
            alt="mountain 4"
            width={250}
            height={50}
            className="absolute"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.8}
          speed={0.6}
          style={{
            pointerEvents: "none",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Image
            loading="lazy"
            src={url("botero-man")}
            alt="mountain 4"
            width={80}
            height={50}
            className="absolute"
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1.9}
          speed={0.5}
          style={{
            pointerEvents: "none",
          }}
        >
          <Image
            loading="lazy"
            src={url("botero-horse")}
            alt="mountain 4"
            width={150}
            height={50}
            className="absolute"
          />
        </ParallaxLayer>

        {/* <ParallaxLayer
          offset={2}
          speed={0}
          className="max-lg:bg-[url(/images/home-header/fondo.jpg)] lg:bg-[url(/images/home/sky.png)] bg-top bg-no-repeat sm:bg-cover"
        /> */}

        {/* <ParallaxLayer sticky={{ start: 0, end: 1 }} speed={10} factor={1}>
          <div className="w-screen h-screen  flex font-bold items-center justify-center">
            <div className="w-2/3 py-8 text-center backdrop-blur-sm backdrop-invert bg-violet/30 border-2 border-white cursor-pointer">
              <Countdown
                timeTillDate="06 29 2023, 11:59 pm"
                timeFormat="MM DD YYYY, h:mm a"
                title={<>
                <Image
                loading="lazy"
                  src={url("title")}
                  alt="mountain 4"
                  width={200}
                  height={50}
                  style={center}
                  className="m-auto py-5"
                />
                <h1 className="uppercase">Gran lanzamiento</h1>
                </>}
              />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          speed={12}
          sticky={{ start: 0.9, end: 1}}
          factor={1}
          style={{
            ...center,
            pointerEvents: "none",
          }}
        >
          <Image
          loading="lazy"
            src={url("nfts")}
            alt="mountain 4"
            width={900}
            height={500}
            className="absolute"
          />
        </ParallaxLayer> */}
      </Parallax>
    </section>
  );
};

export default Home;
