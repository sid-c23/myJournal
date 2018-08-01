import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default () => {
	return (
		<Menu>
			<Menu.Item
				name="myJournal"
			>
				<Link to="/">myJournal</Link>
			</Menu.Item>

		</Menu>
	)
}
