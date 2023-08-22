import Card from "./Top/Card";

const Top = () => {
  return (
    <section className="flex gap-[30px] items-center table:grid grid-cols-2 grid-rows-2 phone:flex phone:flex-col">
      <Card
        topColor="hsl(208, 92%, 53%)"
        img="icon-facebook.svg"
        username="@nathanf"
        count={1987}
        whatIs="followers"
        todayNum={12}
      />
      <Card
        topColor="hsl(203, 89%, 53%)"
        img="icon-twitter.svg"
        username="@nathanf "
        count={1044}
        whatIs="followers"
        todayNum={99}
      />
      <Card
        topColor="hsl(37, 97%, 70%)"
        topColorTo="hsl(329, 70%, 58%)"
        img="icon-instagram.svg"
        username="@realnathanf"
        count={11000}
        whatIs="followers"
        todayNum={1099}
      />
      <Card
        topColor="hsl(348, 97%, 39%)"
        img="icon-youtube.svg"
        username="Nathan F."
        count={8239}
        whatIs="followers"
        todayNum={-144}
      />
    </section>
  );
};

export default Top;
