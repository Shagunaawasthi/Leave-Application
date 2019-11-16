import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/login/Login';
import Cards from './components/cards/cards.jsx';
import Leaves from './components/cards/leaveApply';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import { AuthContext } from './context/auth';

class App extends Component {
	render() {
		return (
			<AuthContext.Provider value={true}>
			<Router>
				<Header/>
				<div className="App">
				<ul className="links">
				
				<li>
					<Link to="/">Login Page</Link>
				</li>
				<li><Link to="/user">User Page</Link></li>
				</ul>
				<Route exact path="/" component={Login}/>
				<PrivateRoute path="/user" component={Cards}/>
			</div>
			<Footer/>
			</Router>
			</AuthContext.Provider>

		);
	}
}

export default App;
