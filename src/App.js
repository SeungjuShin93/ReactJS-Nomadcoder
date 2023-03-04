import { useEffect, useState } from 'react';
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [asset, SetAsset] = useState('');

  const onChange = (event) => SetAsset(event.target.value);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins! {loading ? '' : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <input
            value={asset}
            onChange={onChange}
            type='number'
            placeholder='how much do you invest?'
          />
          <select>
            {coins.map((coin) => (
              <option>
                {coin.name} ({coin.symbol}): {asset / coin.quotes.USD.price}{' '}
                {coin.symbol}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
export default App;
