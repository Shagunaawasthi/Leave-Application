import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import Login from './components/login/Login';
import Cards from './components/cards/cards.jsx';
// import Signup from './components/signup/signup';
// import Leave from './components/modal-leave/leave-modal';
import Leaves from './components/cards/leaveApply';
import Header from './components/Header/HeaderComponent';
import Footer from './components/Footer/FooterComponent';
import AdminLogin from './components/Admin/adminLogin';
import { AuthContext } from './context/auth';
import AdminProfile from './components/Admin/adminProfile';
import setLeaves from './components/Admin/setLeaves';
import setStaff from './components/Admin/setStaff';

class App extends Component {
	render() {
		return (
			<AuthContext.Provider value={true}>
			<Header/>
			<Router>
				
				<div className="App">
				{/* <ul className="links">
				
				<li className="L1">
					<Link to="/login/staff">Faculty Login</Link>
				</li>
				<li className="L2"><Link to="/login/admin">Admin Login</Link></li>
				</ul> */}
				<Route exact path="/login/staff" component={Login}/>
				<Route exact path="/login/admin" component={AdminLogin}/>
				{/* <Route exact path="/admin" component={AdminProfile}/> */}
				<Route exact path="/admin/setleaves" component={setLeaves}/>
				<Route exact path="/admin/addfaculty" component={setStaff}/>
				<Route exact path="/admin/viewfaculty" component={AdminProfile}/>
				<Route exact path="/staff/leave" component={Leaves}/>
				<Route path="/staff/view" component={Cards}/>
				<Redirect from="/" to="/login/staff" />
			</div>
			
			</Router>
			<Footer/>
			</AuthContext.Provider>

		);
	}
}

export default App;
