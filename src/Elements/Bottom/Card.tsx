import { useEffect, useState } from "react";
import useDarkMode from "../../store";

interface CardProps {
  img: string;
  count: number;
  text: string;
  percent: number;
}

const Card = ({ img, count, text, percent }: CardProps) => {
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
      className="w-[256px] h-[124px] hover:bg-card-bg-white bg-top-bg-pattern-white rounded-lg cursor-pointer p-[26px] flex flex-col justify-between transition-colors phone:w-[326px] overflow-hidden reveal"
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
      <div className="flex justify-between items-center">
        <p>{text}</p> <img src={`./${img}`} alt={img} />
      </div>
      <div className="flex justify-between items-end">
        <h1 className="text-3xl">
          {displayCount >= 10000
            ? (displayCount / 1000).toFixed(0) + "k"
            : displayCount}
        </h1>
        <p
          style={
            percent > 0
              ? { color: "hsl(163, 72%, 41%)" }
              : { color: "hsl(356, 69%, 56%)" }
          }
          className="flex items-center gap-1 font-bold text-xs justify-center"
        >
          {percent > 0 ? (
            <img src="./icon-up.svg" alt="icon up" className="animate-bounce" />
          ) : (
            <img
              src="./icon-down.svg"
              alt="icon down"
              className="animate-bounce"
            />
          )}{" "}
          {percent > 0 ? percent : percent * -1}%
        </p>
      </div>
    </div>
  );
};

export default Card;
