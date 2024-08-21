import React from "react";

function CoinButton({ onClick }) {
  return (
    <div className="flex items-center justify-center w-full h-64 mt-36 bg-gradient-to-r from-slate-900 to-slate-700 rounded-full">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EGUMaDiGjK_20AqlIuL338KRk-ksyis33Q&s"
        alt="coin"
        className="max-w-full max-h-full object-contain rounded-full cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
}

export default CoinButton;
