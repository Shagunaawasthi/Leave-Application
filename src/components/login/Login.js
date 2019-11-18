import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './login.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'shared/validator';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {},
            errors: {},
            formSubmitted: false, 
            loading: false,
            redirect: false
        }
    }
   
        
      
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/staff/view' />
        }
      }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
        }

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('/api/authenticate', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          if (res.status === 200) {
            this.props.history.push('/login/staff');
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          alert('Error logging in please try again');
        });
      }
   /* login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if(errors === true){
            alert("You are successfully signed in...");
            window.location.reload()
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }*/

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Login" >
                <Row className="justify-content-center">
                    <form onSubmit={this.login}  >
                        <FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                           
                            <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email &&
                            <HelpBlock>{errors.email}</HelpBlock>
                        }
                        </FormGroup>
                        <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                          
                            <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password &&
                            <HelpBlock>{errors.password}</HelpBlock>
                        }
                        </FormGroup>
                        
                        {this.renderRedirect()}
 
                      <a href="">  <Button type="submit" bsStyle="primary"  onClick={this.setRedirect} onSubmit={this.onSubmit}>Login-In</Button></a>
                    </form>
                </Row>
            </div>
        )
    }
}

export default Login;