import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  // fetch()의 response로 입력된 api(리소스의 경로)의 응답을 받고 then()을 사용해 response의 json부분(응답 본문 텍스트)만 추출했다.

  // then() 메서드는 Promise를 리턴하고 두 개의 콜백 함수를 인수로 받는다. 하나는 Promise가 이행했을 때, 다른 하나는 거부했을 때를 위한 콜백 함수이다.
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.simbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
