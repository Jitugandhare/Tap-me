import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-opacity-60 bg-white flex justify-around rounded-t-lg shadow-md mt-6">
      <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
        <span className="text-2xl">🟡</span>
        <span className="text-sm mt-1">Earn</span>
      </button>
      <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
        <span className="text-2xl">✔️</span>
        <span className="text-sm mt-1">Tasks</span>
      </button>
      <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
        <span className="text-2xl">🏠</span>
        <span className="text-sm mt-1">Town</span>
      </button>
      <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
        <span className="text-2xl">🔄</span>
        <span className="text-sm mt-1">Swap</span>
      </button>
      <button className="flex flex-col items-center bg-purple-300 bg-opacity-70 text-black p-2 rounded-lg w-16 h-16 text-center">
        <span className="text-2xl">😎</span>
        <span className="text-sm mt-1">Account</span>
      </button>
    </footer>
  );
}

export default Footer;
