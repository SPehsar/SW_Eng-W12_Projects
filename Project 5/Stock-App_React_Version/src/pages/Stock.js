import stockData from "../stock-data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Stock() {
  const [stock, setStock] = useState(null);
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
        <h2>
          {stock.name} / {stock.symbol}
        </h2>
        <h3>${stock.lastPrice}</h3>
      </div>
    );
  };

  const loading = () => {
    return <h2>...Loading...</h2>;
  };

  return stock && stock.name ? loaded() : loading();
}

// import React from "react";
// import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import About from "./About";
// import Stock from "./Stock";
// import stockData from "../data";

// function Main(props) {
//   return (
//     <main>
//       <BrowserRouter>
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route
//           path="/stocks/:symbol"
//           render={(props) => <Stock stockData={stockData} {...props} />}
//         />
//         <Route
//           path="/stocks"
//           render={(props) => <Dashboard {...props} stockData={stockData} />}
//         />
//       </BrowserRouter>
//     </main>
//   );
// }

// export default Main;
