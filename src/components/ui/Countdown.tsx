import { useState, useEffect, ReactNode } from "react";
import moment from "moment";

import style from "./styles/countdown.module.css"

interface Props {
  timeTillDate: string;
  timeFormat: string;
  title: ReactNode;
}

let interval: any = undefined;

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number
) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");

  return d;
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(
  number: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) {
  return (
    ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  );
}

const SVGCircle = ({ radius }: { radius: number }) => (
  <svg className={style["countdown-svg"]}>
    <path
      fill="none"
      stroke="#333"
      stroke-width="4"
      d={describeArc(50, 50, 48, 0, radius)}
    />
  </svg>
);

const Countdown = ({ timeTillDate, timeFormat, title }: Props) => {
  const [days, setDays] = useState<string>();
  const [hours, setHours] = useState<string>();
  const [minutes, setMinutes] = useState<string>();
  const [seconds, setSeconds] = useState<string>();

  useEffect(() => {
    interval = setInterval(() => {
      const then: any = moment(timeTillDate, timeFormat);
      const now: any = moment();
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);
  return (
    <div>
      {title}
      <div className={style["countdown-wrapper"]}>
        {days && (
          <div className={style["countdown-item"]}>
            <SVGCircle radius={mapNumber(Number(days), 30, 0, 0, 360)} />
            {days}
            <span>days</span>
          </div>
        )}
        {hours && (
          <div className={style["countdown-item"]}>
            <SVGCircle radius={mapNumber(Number(hours), 24, 0, 0, 360)} />
            {hours}
            <span>hours</span>
          </div>
        )}
        {minutes && (
          <div className={style["countdown-item"]}>
            <SVGCircle radius={mapNumber(Number(minutes), 60, 0, 0, 360)} />
            {minutes}
            <span>minutes</span>
          </div>
        )}
        {seconds && (
          <div className={style["countdown-item"]}>
            <SVGCircle radius={mapNumber(Number(seconds), 60, 0, 0, 360)} />
            {seconds}
            <span>seconds</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Countdown;
