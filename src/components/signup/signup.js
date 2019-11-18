import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button,  } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './signupstyle.css'

class Signup extends Component {
  render(){
  return (
    <div className="Signup">
                <Row className="justify-content-center">
                    <form >
                        <FormGroup controlId="email">
                           
                            <FormControl type="text" name="email" placeholder="Enter your email"  />
                       
                        </FormGroup>
                        <FormGroup controlId="password" >
                            
                            <FormControl type="password" name="password" placeholder="Enter your password" />
                        
                        </FormGroup>
                        <FormGroup controlId="password" >
                            
                            <FormControl type="password" name="password" placeholder="Confirm your password" />
                        
                        </FormGroup>
                        <FormGroup>                     
                           <a href="">  <Button type="submit" className="btn btn-primary">Signup </Button></a><br/><br/>
                      <Link to="/login">Don't have an account?</Link>
                      </FormGroup>

                    </form>
                </Row>
            </div>
  );
  }
}

export default Signup;