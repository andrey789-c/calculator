import React from "react";
import { Calculator } from "./components/calculator/";
import "./styles/index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { History } from "./components/history";

function App() {
	return (
		<div className="block">
			<Provider store={store}>
        <History />
				<Calculator />
			</Provider>
		</div>
	);
}

export default App;
