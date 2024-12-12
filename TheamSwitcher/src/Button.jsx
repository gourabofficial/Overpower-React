import React, { useContext } from "react";
import { ThemeContext } from "./Theme";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleChange() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("dark-mode");
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={theme === "dark"}
        onChange={handleChange}
      />
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4
       peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer
        dark:bg-gray-700 peer-checked:after:translate-x-full
         peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
          after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
          after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>

      <span className="ml-3 text-sm font-medium text-black-900 dark:text-black-300">
        {theme === "dark" ? "Switch LightMode" : "Switch DarkMode"}
      </span>
    </label>
  );
}

export default Button;
