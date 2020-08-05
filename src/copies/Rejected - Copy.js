import React from 'react';
import "./modal.css";



const Rejected = () => {
  var show =1;	
  var showHideClassName = show ? "modal display-block" : "modal display-none";
  const onClickedHandler=()=>{
	console.log("hi");  
    show= 0;
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h4>Password Rejected,Please follow password guidelines</h4>
	    <button onClick={onClickedHandler}>Close</button>
      </section>
    </div>
  );
};



export default Rejected;