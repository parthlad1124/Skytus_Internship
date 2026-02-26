import React, { useState, useEffect } from "react";

const Header = React.memo(() => {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <button
        onClick={() => setDark(!dark)}
        className="bg-gray-200 dark:bg-gray-600 px-4 py-2 rounded"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
});

export default Header;