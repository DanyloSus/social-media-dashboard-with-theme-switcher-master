const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime green": "hsl(163, 72%, 41%)",
        "bright red": "hsl(356, 69%, 56%)",

        facebook: "hsl(208, 92%, 53%)",
        twitter: "hsl(203, 89%, 53%)",
        "instagram-from": "hsl(37, 97%, 70%)",
        "instagram-to": "hsl(329, 70%, 58%)",
        youtube: "hsl(348, 97%, 39%)",

        "toggle-dark-from": "hsl(210, 78%, 56%)",
        "toggle-dark-to": "hsl(146, 68%, 55%)",

        "toggle-white": "hsl(230, 22%, 74%)",

        "bg-dark": "hsl(230, 17%, 14%)",
        "top-bg-pattern-dark": "hsl(232, 19%, 15%)",
        "card-bg-dark": "hsl(228, 28%, 20%)",
        "text-dark": "hsl(228, 34%, 66%)",
        "h-text-dark": "hsl(0, 0%, 100%)",

        "bg-white": "hsl(0, 0%, 100%)",
        "top-bg-pattern-white": "hsl(225, 100%, 98%)",
        "card-bg-white": "hsl(227, 47%, 96%)",
        "text-white": "hsl(228, 12%, 44%)",
        "h-text-white": "hsl(230, 17%, 14%)",
      },
    },
  },
  plugins: [],
});
