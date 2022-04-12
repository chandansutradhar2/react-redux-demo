import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Home userName={"chandan"} />
				<Login />
			</Provider>
		</div>
	);
}

export default App;
