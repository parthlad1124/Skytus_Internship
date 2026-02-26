import React from "react";

const StatCard = React.memo(({ title, value }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-xl shadow transition-colors duration-300">
      <h3 className="text-gray-500 dark:text-gray-300 text-sm">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
});

export default StatCard;