import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './sharedstyle.css'
class AdminProfile extends Component {
	render() {
		return (
		
			
				
				<div className="Admin" >
				<ul  >
				<br/>
				<li >
					<Link to="/admin/setleaves" >Set Leaves</Link>
				</li>
				<li ><Link to="/admin/addfaculty">Add Faculty</Link></li>
                <li ><Link to="/admin/viewfaculty">View Faculty</Link></li>
				</ul>
				
			</div>
			
			
			

		);
	}
}

export default AdminProfile;