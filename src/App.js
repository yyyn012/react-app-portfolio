import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
      });
  }, []);
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading</strong> : null}

      <select>
        {coins.map((coin) => (
          <option>
            {coin.name}({coin.simbol}) : ${coin.quotes.USD.price}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
