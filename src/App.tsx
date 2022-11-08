import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import HomeScreen from "./Components/HomeScreen";

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomeScreen />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
