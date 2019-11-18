import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button,  } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './sharedstyle.css'

class setStaff extends Component {
  render(){
  return (
    <div className="Signup">
                <Row className="justify-content-center">
                    <form >
                        <FormGroup controlId="typeofleaves">
                           
                            <FormControl type="text" name="typeofleaves" placeholder="Enter the type of leave"  />
                       
                        </FormGroup>
                        <FormGroup controlId="countofleaves" >
                            
                            <FormControl type="password" name="countofleaves" placeholder="Enter number of leaves" />
                        
                        </FormGroup>
                        <FormGroup controlId="typeofleaves">
                           
                           <FormControl type="text" name="typeofleaves" placeholder="Enter the type of leave"  />
                      
                       </FormGroup>
                       <FormGroup controlId="countofleaves" >
                           
                           <FormControl type="password" name="countofleaves" placeholder="Enter number of leaves" />
                       
                       </FormGroup>
                       <FormGroup controlId="typeofleaves">
                           
                           <FormControl type="text" name="typeofleaves" placeholder="Enter the type of leave"  />
                      
                       </FormGroup>
                       <FormGroup controlId="countofleaves" >
                           
                           <FormControl type="password" name="countofleaves" placeholder="Enter number of leaves" />
                       
                       </FormGroup>
                      
                        <FormGroup>                     
                           <Button type="submit" className="btn btn-primary">Update</Button><br/><br/>
                    
                      </FormGroup>

                    </form>
                </Row>
            </div>
  );
  }
}

export default setStaff;