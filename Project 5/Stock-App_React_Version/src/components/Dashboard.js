import React from "react";
import { Link } from 'react-router-dom';
import stockData from '../stock-data';
// import {Link} from 'react-router-dom'

// export default function Dashboard(props) {
//   let stockData = stockData.map((d, i) => {
//     return <Link key={i} to={`/stocks/${d.symbol}`}>
//         <li >{d.name}</li>
//       </Link>
//   });
//   return <ul>{stockData}</ul>;
// }






export default function Dashboard(props) {
    return (
        <section>
            <h2>Companies List:</h2>
            {
                stockData.map((stock) => {
                    const { name, symbol } = stock;

                    return (
                        <Link key={symbol} to={`/stocks/${symbol}`}>
                            <h3>{name}</h3>
                        </Link>
                    );
                })
            }
        </section>
    )
}


