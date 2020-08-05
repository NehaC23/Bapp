import React, { Component } from 'react';
import {  Button } from 'react-bootstrap';
import Accepted from './Accepted.js';
import Rejected from './Rejected.js';


var patt = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

class PasswordManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmpassword: '',
      realpassword: '',
	  formErrors: {
        confirmpassword: "",
        realpassword: "",
		mismatch:""
      }
    };
  }
  myChangeHandler = (event) => {
	  
	event.preventDefault();  
    let nam = event.target.name;
    let val = event.target.value;
	let formErrors = { ...this.state.formErrors };
	switch (nam) {
      case "confirmpassword":
        formErrors.confirmpassword =
          val.length > 3 ? "Max 2 characaters required" : "";
        break;
		case "realpassword":
		formErrors.realpassword = patt.test(val) ? "Password correct" : "invalid password ";
        break;
		default:
        break;
    }
	this.setState({ formErrors, [nam]: val }, () => console.log(this.state));
	
    //this.setState({[nam]: val});
  }
  
  onSubmit = () => {
	 /* 
     let { real } = this.state.realpassword;
	let { conf } = this.state.confirmpassword;
	let x = this.state.formErrors.realpassword;
	
    let button;
    if (real === conf) {
		if(x ==="Password correct"){
        button = <Accepted/>
		}
		else {
		button = <Rejected/>	
		}
	 } 
	else {
     button = <h5>Mistmatch in entered password,please refresh and re-enter</h5>
	}
     
     return button;
	 
	 */
	 return 1;
  }  		 
	    	   
     
  render() {
	let { real } = this.state.realpassword;
	let { conf } = this.state.confirmpassword;
	let x = this.state.formErrors.realpassword;
	
    let button;
    if (real === conf) {
		if(x ==="Password correct"){
        button = <Accepted/>
		}
		else {
		button = <Rejected/>	
		}
	 } 
	else {
     button = <h5>Mistmatch in entered password,please refresh and re-enter</h5>
	}
	 	
    		
    return (
	  <div>
      <form>
      <h1>Update Form</h1>
      <p>Enter password:</p>
      <input
        type='password'
        name='realpassword'
        onChange={this.myChangeHandler}
      />
	   <p>Confirm Password </p>
      <input
        type='password'
        name='confirmpassword'
        onChange={this.myChangeHandler}
      />
	   
      </form>
	  <Button onClick={this.onSubmit}>Proceed to Password Management Page</Button>
		  {button}
	  </div>
    );
  }
}

export default PasswordManage;



