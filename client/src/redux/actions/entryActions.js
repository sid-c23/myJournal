import axios from 'axios'

export function fetchEntries() {
	return function(dispatch) {
		dispatch({ type: "FETCH_ENTRIES_START" })
		axios.get("/api/entries")
			.then(res => {
				dispatch({ type: "FETCH_ENTRIES_FULFILLED", payload: res.data })
			})
			.catch(err => {
				dispatch({ type: "FETCH_ENTRIES_ERROR", payload: err })
			})
	}
}

export function createEntry(entry) {
	return function(dispatch) {
		axios.post("/api/entries", entry)
			.then(res => dispatch({ type: "CREATE_ENTRY", payload: res.data }))
			.catch(err => dispatch({ type: "CREATE_ENTRY_ERROR", payload: err }))
	}
}

export function getOneEntry(id) {
	return function(dispatch) {
		dispatch({ type: "ONE_ENTRY", payload: id })
	}
}

export function deleteEntry(id) {
	return function(dispatch) {
		axios.delete(`/api/entries/${id}`)
			.then(res => {
				dispatch({ type: "DELETE_ENTRY", payload: id })
			})
			.catch(err => {
				dispatch({ type: "DELETE_ENTRY_ERROR", payload: err })
			})
	}
}