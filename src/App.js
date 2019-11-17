import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Login from './components/login/Login';
import Cards from './components/cards/cards.jsx';
import Signup from './components/signup/signup';
import Leaves from './components/cards/leaveApply';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import { AuthContext } from './context/auth';

class App extends Component {
	render() {
		return (
			<AuthContext.Provider value={true}>
			<Header/>
			<Router>
				
				<div className="App">
				<ul className="links">
				
				<li className="L1">
					<Link to="/">Sign Up</Link>
				</li>
				<li className="L2"><Link to="/user">User Page</Link></li>
				</ul>
				<Route exact path="/" component={Signup}/>
				<Route exact path="/login" component={Login}/>
				<Route exact path="/leave" component={Leaves}/>
				<PrivateRoute path="/user" component={Cards}/>
			</div>
			
			</Router>
			<Footer/>
			</AuthContext.Provider>

		);
	}
}

export default App;
