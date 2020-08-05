import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Accepted from './Accepted.js';
import Rejected from './Rejected.js';


var patt = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);

class PasswordManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmpassword: '',
      realpassword: '',
	  flag_button:false,
	  show:true,
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
}
  
 
  hideModal = () => {
    this.setState({ show: false });
  };
  
  hideSetModal = () => {
    this.setState({ show: false });
	window.location.reload(false);
};
  
  onSubmit = () => {
	 this.setState({flag_button: true});
}  		 
	    	   
     
  render() {
	
	let { real } = this.state.realpassword;
	let { conf } = this.state.confirmpassword;
	let real_pass_error = this.state.formErrors.realpassword;
	
  	console.log("insider pm render");	
    return (
	 <div>
	    <h3>Passowrd Management System and Instructions</h3>
	    <p>{' '}</p>
	    <form>
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
	   <p>{' '}</p> 
	   <Button onClick={this.onSubmit}>Proceed </Button>
		  {this.state.flag_button?(real === conf ? (real_pass_error ==="Password correct")?
		  <Accepted show={this.state.show} handleClose={this.hideModal}>
          </Accepted>
		  :<Rejected show={this.state.show} handleClose={this.hideSetModal}>
		   </Rejected>
		  :"Mismtach in length"):""}
	   <p>{' '}</p>
	   <h4>Password Instructions</h4>
       <ul>
	      <li>Be at least 8 characters and atmost 32 characters in length.</li>
          <li>Contain both upper and lowercase alphabetic characters (e.g. A-Z, a-z)</li>
          <li>Have at least one numerical character (e.g. 0-9)</li>
          <li>Have at least one special character (e.g. ~!@#$%^&*()_-+=)</li>  
		  <li>Empty Password Not Accepted</li>
       </ul>	  		  	     
	  </div>
    );
  }
}

export default PasswordManage;



