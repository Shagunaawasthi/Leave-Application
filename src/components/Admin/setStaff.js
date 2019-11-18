import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button,  } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './sharedstyle.css'

class setLeaves extends Component {
  render(){
  return (
    <div className="Signup">
                <Row className="justify-content-center">
                    <form >
                        <FormGroup controlId="email">
                           
                            <FormControl type="text" name="email" placeholder="Enter the email"  />
                       
                        </FormGroup>
                        <FormGroup controlId="password" >
                            
                            <FormControl type="password" name="password" placeholder="Enter the password" />
                        
                        </FormGroup>
                        <FormGroup controlId="password" >
                            
                            <FormControl type="password" name="password" placeholder="Confirm the password" />
                        
                        </FormGroup>
                        <FormGroup>                     
                           <a href="">  <Button type="submit" className="btn btn-primary">Add </Button></a><br/><br/>
                      
                      </FormGroup>

                    </form>
                </Row>
            </div>
  );
  }
}

export default setLeaves;