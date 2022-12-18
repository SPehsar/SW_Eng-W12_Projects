import stockData from "../stock-data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock() {
  const [stock, setStock] = useState({});
  const { symbol } = useParams();

  useEffect(() => {
    const getStock = async () => {
      try {
        const data = stockData.find((theStock) => theStock.symbol === symbol);
        setStock(data);
      } catch (error) {
        console.error(error);
      }
    };

    getStock();
  }, [symbol]);

  const loaded = () => {
    return (
      <div className="bodyDiv">
        <h1>
          {stock.name}
        </h1>
        <h2>( {stock.symbol} )</h2>
        <table>
        <tr>
        <th><h3>Last Price</h3></th>
        <th><h3>Changed</h3></th>
        <th><h3>High</h3></th>
        <th><h3>Low</h3></th>
        <th><h3>Open</h3></th>
        </tr>
        <tr>
        <th><h3>${stock.lastPrice}</h3></th>
        <th><h3>${stock.change}</h3></th>
        <th><h3>${stock.high}</h3></th>
        <th><h3>${stock.low}</h3></th>
        <th><h3>${stock.open}</h3></th>
        </tr>
        </table>
      </div>
    );
  };

  const loading = () => {
    return <h2>...Loading...</h2>;
  };

  return stock && stock.name ? loaded() : loading();
}

