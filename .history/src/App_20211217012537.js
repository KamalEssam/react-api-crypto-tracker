import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);
  const handleChange = e => {
    setSearch(e.target.value)
  }
const filteredCoins=coins.filter(coin =>
  coin.name.toLowercase().includes(search.toLowerCase())
  )
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-search"
            onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return(
          
        );
      })}
    </div>
  );
}

export default App;
