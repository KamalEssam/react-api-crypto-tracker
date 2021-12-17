import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';


//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {
  const [coins, setCoins]=useState([]);
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
    }).
  })
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
