// export default function Stock() {
      
//     return (
//       <div>
//         <h2>
//           None - No code, no information
//         </h2>
       
//       </div>
//     );
//   };

import React from "react";
export default function Stock() {
  return (
  <div>
    <h2>
      Stock Page
    </h2>
  </div>
);
};










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
