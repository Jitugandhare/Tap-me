import React from "react";

function Stats({ count }) {
  return (
    <div className="flex space-x-4 mt-4 bg-opacity-10 bg-white w-full py-2 px-4 rounded-lg">
      <div className="flex items-center w-full justify-center">
        <span>🟡</span>
        <span className="ml-2 text-white">{count}</span>
      </div>
      <div className="flex items-center w-full justify-center">
        <span>🔷</span>
        <span className="ml-2 text-white">0/h</span>
      </div>
      <div className="flex items-center w-full justify-center">
        <span>🌟</span>
        <span className="ml-2 text-white">0</span>
      </div>
      <div className="flex items-center w-full justify-center">
        <span>🟣</span>
        <span className="ml-2 text-white">0</span>
      </div>
    </div>
  );
}

export default Stats;
