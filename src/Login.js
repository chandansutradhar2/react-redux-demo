import { connect } from "react-redux";
import { doLogin, doLogout, addToCart } from "./actions/actionCreator";

function Login(props) {
	const login = () => {
		props.dispatch({ type: "doLogin", payload: true });
	};

	return (
		<>
			{props.isLoggedIn ? (
				<button onClick={() => props.dispatch(doLogout())}>Logout</button>
			) : (
				<button onClick={login}>Login</button>
			)}
		</>
	);
}

//react-redux way of connecting to state and accessing state properties
function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Login);
