import { useEffect } from "react";
import Bottom from "./Elements/Bottom";
import Header from "./Elements/Header";
import Top from "./Elements/Top";
import useDarkMode from "./store";

const App = () => {
  const isDark = useDarkMode((s) => s.isDark);

  useEffect(() => {
    const h1Elements = document.querySelectorAll("h1");

    if (isDark) {
      h1Elements.forEach((element) => {
        element.style.color = "hsl(0, 0%, 100%)";
      });
    } else {
      h1Elements.forEach((element) => {
        element.style.color = "hsl(230, 17%, 14%)";
      });
    }
  }, [isDark]);

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", reveal);

    reveal();
  }, []);

  return (
    <main
      className="overflow-x-hidden transition-colors min-h-screen w-screen  pb-[75px] pt-[42px] justify-center flex flex-col items-center table:py-11 table:px-6"
      style={
        isDark
          ? { background: "hsl(230, 17%, 14%)", color: "hsl(228, 34%, 66%)" }
          : { background: "hsl(0, 0%, 100%)", color: "hsl(228, 12%, 44%)" }
      }
    >
      <div className="max-w-[1112px] justify-between flex flex-col items-center gap-12">
        <Header />
        <Top />
        <Bottom />
      </div>
    </main>
  );
};

export default App;
