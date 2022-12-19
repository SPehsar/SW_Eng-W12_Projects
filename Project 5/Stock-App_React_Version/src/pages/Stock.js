import stockData from "../stock-data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock(props) {
  const [info, setInfo] = useState({});
  const { symbol } = useParams();

  const positive = {
    color: "green",
    float: "right",
  };

  const negative = {
    color: "red",
    float: "right",
  };

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = stockData.find(
          (singleStock) => singleStock.symbol === symbol
        );
        setInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    getInfo();
  }, []);

  const loaded = () => {
    return (
      <>
        <div className="bodyDiv">
          <h1>{info.name}</h1>
          <h2>( {info.symbol} )</h2>
          <hr />
          <h3 style={{float: "left"}}>Changed:</h3>
            {info.change >= 0 ? (
              <h3 style={positive}>${info.change}</h3>
            ) : (
              <h3 style={negative}>${info.change}</h3>
            )}
          
          <table>
            <tr>
              <th>
                <h3>Last Price</h3>
              </th>
              <th>
                <h3>High</h3>
              </th>
              <th>
                <h3>Low</h3>
              </th>
              <th>
                <h3>Open</h3>
              </th>
            </tr>
            <tr>
              <th>
                <h3>${info.lastPrice}</h3>
              </th>
              <th>
                <h3>${info.high}</h3>
              </th>
              <th>
                <h3>${info.low}</h3>
              </th>
              <th>
                <h3>${info.open}</h3>
              </th>
            </tr>
          </table>
        </div>
        <br /><br /><br />
        <hr />
        <br />
      </>
    );
  };

  const loading = () => {
    return <h2>...Loading...</h2>;
  };

  return info ? loaded() : loading();
}
