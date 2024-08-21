import React, { useEffect } from "react";
import './App.css';
import axios from 'axios';
import Header from "./components/Header";
import Stats from "./components/Stats";
import CoinButton from "./components/CoinButton";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    // Fetch the initial count from the backend
    const fetchCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/coins');
        setCount(response.data.count);
      } catch (error) {
        console.error('Error fetching count:', error);
      }
    };

    fetchCount();
  }, []);

  const incrementCount = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/coins/increment');
      setCount(response.data.count);
    } catch (error) {
      console.error('Error incrementing count:', error);
    }
  };

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
