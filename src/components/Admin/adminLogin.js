import React, { Component } from "react";
import { Row, FormGroup, FormControl, Button, HelpBlock } from 'react-bootstrap';
import './AdminLogin.css';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from 'shared/validator';
import { Link, Redirect } from 'react-router-dom';

let users = require("../../data.js").users;

class AdminLogin extends Component {

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
            return <Redirect to='/admin' />
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
        let errors = this.validateLoginForm();
        if(errors === true){
            fetch('/api/authenticate', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                  'Content-Type': 'application/json'
                }
              })
              .then(res => {
                if (res.status === 200) {
                  this.props.history.push('/user');
                } else {
                  const error = new Error(res.error);
                  throw error;
                }
              })
              .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
              });
        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    // onSubmit = (event) => {
    //     event.preventDefault();
    //     let errors = this.validateLoginForm();
    //     // console.log(this.state.formData);
    //     if(errors === true){
    //         let formdata = this.state.formData;
    //         users[0].email = formdata.email;
    //         console.log(users);
            
    //     } else {
    //         this.setState({
    //             errors: errors,
    //             formSubmitted: true
    //         });
    //     }
    //   }

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
                <Row className="justify-content-center mb-3">
                    <h1>Administrator</h1>
                </Row>
                <Row className="justify-content-center">
                    <form>
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
 
                        <Button type="submit" bsStyle="primary"  onClick={this.onSubmit}>Login</Button>
                    </form>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Link to="/login/staff">Login as staff</Link>
                </Row>
            </div>
        )
    }
}

export default AdminLogin;