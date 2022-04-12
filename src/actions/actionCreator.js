export function doLogin() {
	return {
		type: "doLogin",
		payload: true,
	};
}

export function doLogout() {
	return {
		type: "doLogout",
		paylod: false,
	};
}

export function createUser(user) {
	return {
		type: "addUser",
		payload: user,
	};
}

export function addToCart(totalQty, totalAmount) {
	return {
		type: "addToCart",
		payload: {
			totalQty: totalQty,
			totalAmount: totalAmount,
		},
	};
}
