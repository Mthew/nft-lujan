import { FC, useEffect, useState } from "react";
import style from "./styles/animate.module.css";

interface Props {
  time: number;
  onFinish: () => any;
}

const PageLoading: FC<Props> = ({ time, onFinish }) => {

  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const aumento = 100 / time;
    let value = 0;
    const id = setInterval(() => {
      if (value >= 100) {
        onFinish();
        return;
      }
      value += aumento;
      setPercent((prev) => (prev = value));
    }, time * 100);
    return () => clearInterval(id);
  }, [time]);

  return (
    <div className="fixed top-0 left-0 z-[9999] bg-black w-screen">
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-1/2">
        <img
          loading="lazy"
          src={"/LOGO-NFT.png"}
          alt="Loading"
          className={style["animate-element"]}
          />
      </div>
      <div>
        <img
          loading="lazy"
          src={"/logo-font-white.png"}
          alt="Loading"
          className={style["animate-element"]}
          />
      </div>
      <div className="w-1/2 mt-10 bg-gray-200 rounded-full dark:bg-gray-700">
        <div
          className="text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full bg-gradient-to-r from-blue-600 via-sky-600 to-blue-900"
          style={{
            width: `${percent}%`,
            transition: "width 2s",
          }}
          >
          {" "}
          {`${percent}%`}
        </div>
      </div>
    </div>
          </div>
  );
};

export default PageLoading;
