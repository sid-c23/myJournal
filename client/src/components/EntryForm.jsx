import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'
import marked from 'marked'
import DisplayEntry from './DisplayEntry'
export default class EntryForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			header: "",
			description: ""
		}
	}
	handleChange(e) {
		let change = {}
		change[e.target.name] = e.target.value
		this.setState(change)
	}
	handleSubmit(e) {
		e.preventDefault()
		console.log("hi")
		if(this.state.header !== "" && this.state.description !== "") {
			const entry = {
				header: this.state.header,
				description: this.state.description
			}
			this.props.createEntry(entry)
			this.setState({
				header: "",
				description: ""
			})
		}
	}
	render() {
		return (
			<Grid columns={3}>
				<Grid.Column>
					<h1>Previous Entries</h1>
					<DisplayEntry deleteEntry={this.props.deleteEntry} entries={this.props.entries} />
				</Grid.Column>
				<Grid.Column>
					<h1>Add Entry</h1>
					<Form onSubmit={this.handleSubmit.bind(this)}>
						<Form.Group widths="equal">
							<Form.Input fluid name="header" label="Entry Header" placeholder="Entry Header" onChange={this.handleChange.bind(this)} value={this.state.header} />
						</Form.Group>
						<Form.TextArea name="description" label="Entry Description (markdown)" style={{ minHeight: 300 }} onChange={this.handleChange.bind(this)} value={this.state.description} />
						<Form.Button fluid content="Add Entry" primary  /> 
					</Form>
				</Grid.Column>
				<Grid.Column>
						<h1>Markdown Preview</h1>
						<div dangerouslySetInnerHTML={{__html: marked(this.state.description)}}></div>
				</Grid.Column>
			</Grid>
		)
	}
}
