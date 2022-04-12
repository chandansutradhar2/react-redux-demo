import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Login } from "./Login";

function App() {
	return (
		<div className="App">
			<Home userName={"chandan"} />
			<Login />
		</div>
	);
}

export default App;
