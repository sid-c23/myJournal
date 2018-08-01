import React, { Component } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import EntryForm from './EntryForm'

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEntries, createEntry, deleteEntry } from '../redux/actions/entryActions'

class Dashboard extends Component {
	componentWillMount() {
		this.props.fetchEntries()

	}
	render() {
		return (
			<Container>
					<EntryForm createEntry={this.props.createEntry.bind(this)} deleteEntry={this.props.deleteEntry.bind(this)} entries={this.props.entryReducer.entries}/>
			</Container>
		)
	}
}
function mapStateToProps(state) {
	return {
		entryReducer: state.entry
	}
}
function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchEntries,
		createEntry,
		deleteEntry
	}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Dashboard)