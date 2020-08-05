import React from 'react';
import "../styles/modal.css";
import { Redirect } from "react-router-dom";




const Accepted = ({ handleClose, show}) => {
   const showHideClassName = show ? "modal display-block" : "modal display-none";
   console.log("Accepted Modal");
   console.log(show);
   
  return (
      <div className={showHideClassName}>
      <section className="modal-main">
        <h4>Password Accepted,Redirecting to first page as the application ends here.</h4>
	    <button onClick={handleClose}>Close</button>
		{show?" ":<Redirect to="/"/>}
      </section>
    </div>
  );
};


export default Accepted;