import { Switch } from "@material-tailwind/react";
import useDarkMode from "../store";

const Header = () => {
  const { changeIsDark, isDark } = useDarkMode((s) => s);

  return (
    <header className="flex justify-between items-center w-full phone:flex-col phone:items-start">
      <div>
        <h1 className="text-2xl">Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <hr
        className={`w-full hidden phone:block my-5 border-[1.5px] transition-colors ${
          isDark ? `border-text-dark` : `border-text-white`
        }`}
      />
      <div className="flex items-center phone:justify-between ml-auto phone:ml-0">
        <p className="mr-3">Dark Mode</p>
        <Switch
          id="switch"
          crossOrigin="anonymous"
          onChange={changeIsDark}
          className={`${
            isDark
              ? "bg-gradient-to-r"
              : "bg-toggle-white hover:bg-gradient-to-r"
          } checked:bg-toggle-white from-toggle-dark-from to-toggle-dark-to h-6 w-12 transition-colors`}
          containerProps={{ className: "relative h-6 w-12" }}
          circleProps={{
            className: `h-[18px] w-[18px] border-none hover:bg-white absolute left-[6px] ${
              isDark ? "bg-bg-dark" : "bg-white"
            }`,
          }}
        />
      </div>
    </header>
  );
};

export default Header;
