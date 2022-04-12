const initalState = {
	isLoggedIn: false, //doLogin, doLogout
	user: {
		firstName: "",
	},
	expenses: [],
	mutualFunds: [],
	uiState: {
		showSpinner: false,
		showAlert: false,
		showWelcomeMsg: false,
	},
	cart: {},
};

//reducer is a pure function which should accept an action and return updated state

export const reducer = (state = initalState, action) => {
	// if (action.type == "doLogin") {
	//
	// } else if (action.type == "doLogout") {
	// 	return { ...state, isLoggedIn: action.payload };
	// } else if (action.type == "addUser") {
	// 	return { ...state, user: action.payload };
	// } else if (action.type == "addToCart") {
	// 	return { ...state, cart: action.payload };
	// } else {
	// 	return state;
	// }
	switch (action.type) {
		case "doLogin":
			return { ...state, isLoggedIn: true };
		case "doLogout":
			return { ...state, isLoggedIn: action.payload };
		default:
			return state;
	}
};
