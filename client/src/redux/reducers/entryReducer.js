export default function reducer(state={
	entries: [],
	entry: {},
	fetching: false,
	fetched: false,
	error: null
}, action) {
	switch(action.type) {
		case "FETCH_ENTRIES_START": {
			return { ...state, fetching: true }
		}
		case "FETCH_ENTRIES_FULFILLED": {
			return { ...state, fetching: false, fetched: true, entries: action.payload }
		}
		case "FETCH_ENTRIES_ERROR": {
			return { ...state, fetching: false, error: action.payload }
		}
		case "DELETE_ENTRY": {
			return {
				...state,
				entries: state.entries.filter((item) => item._id !== action.payload)
			}
		}
		case "DELETE_ENTRY_ERROR": {
			return { ...state, error: action.payload }
		}
		case "CREATE_ENTRY": {
			return {
				...state,
				entries: [action.payload, ...state.entries]
			}
		}
		case "CREATE_ENTRY_ERROR": {
			return { ...state, error: action.payload }
		}
		case "ONE_ENTRY": {
			return {
				...state,
				entry: state.entries.find( (item) => item._id === action.payload)
			}
		}
		case "ONE_ENTRY_ERROR": {
			return {
				...state,
				error: action.payload
			}
		}
		default: {
			return state
		}
	}
}