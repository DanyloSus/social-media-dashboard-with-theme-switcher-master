import useDarkMode from "../store";
import Card from "./Bottom/Card";

const Bottom = () => {
  const isDark = useDarkMode((s) => s);

  return (
    <section>
      <p className="text-2xl mb-3" style={isDark ? {} : { color: "white" }}>
        Overview - Today
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-[30px] table:grid-cols-2 table:grid-rows-4  phone:flex phone:flex-col">
        <Card
          text="Page Views"
          img="icon-facebook.svg"
          count={87}
          percent={3}
        />
        <Card text="Likes" img="icon-facebook.svg" count={52} percent={-2} />
        <Card
          text="Likes"
          img="icon-instagram.svg"
          count={5462}
          percent={2257}
        />
        <Card
          text="Profile Views"
          img="icon-instagram.svg"
          count={52000}
          percent={1375}
        />
        <Card
          text="Retweets"
          img="icon-twitter.svg"
          count={117}
          percent={303}
        />
        <Card text="Likes" img="icon-twitter.svg" count={507} percent={553} />
        <Card text="Likes " img="icon-youtube.svg" count={107} percent={-19} />
        <Card
          text="Total Views"
          img="icon-youtube.svg"
          count={1407}
          percent={-12}
        />
      </div>
    </section>
  );
};

export default Bottom;
