import { useEffect, useState } from "react";
import useDarkMode from "../../store";

interface CardProps {
  topColor: string;
  topColorTo?: string;
  img: string;
  count: number;
  whatIs: "followers" | "subscribers";
  todayNum: number;
  username: string;
}

const Card = ({
  topColor,
  topColorTo,
  img,
  count,
  whatIs,
  todayNum,
  username,
}: CardProps) => {
  const { isDark } = useDarkMode((s) => s);
  const [isHovered, setIsHovered] = useState(false);
  const [displayCount, setDisplayCount] = useState(
    count > 150 ? count - 150 : 0
  );

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  useEffect(() => {
    const incrementCounter = () => {
      if (displayCount < count) {
        setDisplayCount((prevCount) => prevCount + 1);
      }
    };

    const intervalId = setInterval(incrementCounter, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [displayCount]);

  return (
    <div
      className="w-[256px] h-[216px] bg-top-bg-pattern-white hover:bg-card-bg-white transition-colors rounded-lg pb-4 cursor-pointer phone:w-[326px] overflow-hidden reveal"
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      style={
        isDark
          ? {
              background: isHovered
                ? "hsl(228, 28%, 20%)"
                : "hsl(232, 19%, 15%)",
            }
          : {
              background: isHovered
                ? "hsl(227, 47%, 96%)"
                : "hsl(225, 100%, 98%)",
            }
      }
    >
      <div
        style={
          topColorTo
            ? {
                background: `linear-gradient(45deg ,${topColor}, ${topColorTo})`,
              }
            : { background: topColor }
        }
        className="w-full h-1"
      />
      <div className="flex flex-col items-center justify-around h-full">
        <p className="flex items-center gap-3 mt-2">
          <img src={`./${img}`} alt={img} />
          {username}
        </p>
        <h1 className="font-bold text-[54px] leading-[54px] -mb-4">
          {displayCount >= 10000
            ? (displayCount / 1000).toFixed(0) + "k"
            : displayCount}
        </h1>
        <p className="uppercase tracking-[5px] text-xs">{whatIs}</p>
        <p
          style={
            todayNum > 0
              ? { color: "hsl(163, 72%, 41%)" }
              : { color: "hsl(356, 69%, 56%)" }
          }
          className="flex items-center gap-1 font-bold text-xs justify-center"
        >
          {todayNum > 0 ? (
            <img src="./icon-up.svg" alt="icon up" />
          ) : (
            <img src="./icon-down.svg" alt="icon down" />
          )}{" "}
          {todayNum > 0 ? todayNum : todayNum * -1} Today
        </p>
      </div>
    </div>
  );
};

export default Card;
