import React, { Component } from 'react';
import {  Button } from 'react-bootstrap';
import { Link} from "react-router-dom";
import Modal from './Modal.js';
import OpenbankLogo from '../assets/logo_openbank.png';
import brain from '../assets/brain.svg';
import lock from '../assets/lock.svg';
import '../styles/index1.css';



class App extends Component {
	
	 constructor() {
     super();

    this.state = {
      show :false,
	  showpm:false
    };
  }
	
	
   showModal = () => {
    this.setState({ show: true,showpm:true });	
  };

  hideModal = () => {
	this.setState({ show: false });
 };	
  
  render() {
	  const isshowpm = this.state.showpm;
	 return (
	           <div>
	                    <img src={OpenbankLogo}   alt="Smiley face" />
			            <h3>OpenBank Checking account</h3>
                        <div classname = "img-item">
					        <img src={brain}   alt="Smiley face1" />
					        <img src={lock}   alt="Smiley face2" />
					   </div>
                       <h4>Product Information</h4>
                            <p>This Section gives detailed Information about Product.Click on Proceed button for age limit information.</p>					  
					  {' '}
                      <Button onClick={this.showModal}>Proceed </Button>
					         <Modal show={this.state.show} handleClose={this.hideModal}>
                                   <p>Proceed only if you are above 18 years of age.We will keep your information safe as per Data Protection Policy</p>
                             </Modal>
					   <p>{' '}</p>		   
					  {isshowpm ? <Link to='/password-manage'>Password management</Link> :" " }                     					      					  
					                        
			 </div>	  
    );
  
}
}

export default App;