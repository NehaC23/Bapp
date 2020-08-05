import React from 'react';
import "../styles/modal.css";


const Rejected = ({ handleClose, show}) => {
   const showHideClassName = show ? "modal display-block" : "modal display-none";
   console.log(show);
  return (
      <div className={showHideClassName}>
      <section className="modal-main">
        <h4>Password Rejected,Please follow password guidelines.</h4>
	    <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};


export default Rejected;
