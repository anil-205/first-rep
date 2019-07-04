const ATM = (state = {}, action) => {
    switch (action.type) {

		case 'init':
		return {}

		default:
		return state
	}
}

export default ATM