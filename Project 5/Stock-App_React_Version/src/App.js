// import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Dashboard from './components/Dashboard'
import Home from './pages/Home';
import Stock from './pages/Stock';


function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/stocks" element={<Dashboard />} />
				<Route path="/stocks/:symbol" element={<Stock />} />
			</Routes>
		</div>
	);
}

export default App;





















// import Price from './pages/Price';
// import Nav from './components/Nav'

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/currencies" element={<Currencies />}  />
//         <Route path="/price/:symbol" element={<Price />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;