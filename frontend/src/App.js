import React from "react";
import './App.css';
import Header from "./components/Header";
import Stats from "./components/Stats";
import CoinButton from "./components/CoinButton";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="w-1/4 m-auto mt-4 h-auto bg-gradient-to-r from-slate-900 to-slate-700">
      <Header />
      <Stats count={count} />
      <CoinButton onClick={() => setCount(prev => prev + 1)} />
      <Footer />
    </div>
  );
}

export default App;
