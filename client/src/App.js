import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard'
import EditEntry from './components/EditEntry'
class App extends Component {
  render() {
    return (
      <div className="App">
				<BrowserRouter>
					<div>
						<Navigation />
						<Route path="/:id" component={EditEntry} />
						<Route exact path="/" component={Dashboard} />
					</div>
				</BrowserRouter>				
			</div>
    );
  }
}

export default App;
