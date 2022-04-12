import { connect } from "react-redux";
import { doLogout } from "./actions/actionCreator";
function Home(props) {
	return (
		<div>
			<h2>Home View</h2>
			<button onClick={() => props.dispatch(doLogout())}>Logout</button>
			{props.isLoggedIn ? (
				<h3>You Are Logged in</h3>
			) : (
				<h3>You are not loggedIn</h3>
			)}
		</div>
	);
}

//react-redux way of connecting to state and accessing state properties
function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(Home);
