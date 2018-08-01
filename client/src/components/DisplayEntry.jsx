import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import marked from 'marked'
export default (props) => {
	const mappedEntries = props.entries.map( (entry) => (
		<Card key={entry._id}>
			<Card.Content>
				<Card.Header>
					<Link to="/">{entry.header}</Link>
				</Card.Header>
				<Card.Description>
					{/* <div style={{whiteSpace:"pre-wrap"}}>{entry.description}</div> */}
					<div dangerouslySetInnerHTML={{__html: marked(entry.description.substring(0, 50) + "...")}}></div>
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
					<Button onClick={() => props.deleteEntry(entry._id) } fluid basic color="red">Delete</Button>
			</Card.Content>
		</Card>
	))
	return (
		<Card.Group>
			{mappedEntries}
		</Card.Group>
	)
}
