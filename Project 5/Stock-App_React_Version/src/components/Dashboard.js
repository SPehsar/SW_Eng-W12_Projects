import React from "react";
import { Link } from 'react-router-dom';
import stockData from '../stock-data';

export default function Dashboard(props) {
    return (
        <section>
            <h1>Companies with the most active stocks:</h1>
            {
                stockData.map((stock) => {
                    const { name, symbol } = stock;

                    return (
                        <Link key={symbol} to={`/stocks/${symbol}`} style={{ textDecoration: 'none' }}>
                            <h3>{name}</h3>
                        </Link>
                    );
                })
            }
        </section>
    )
}


