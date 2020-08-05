import React from 'react';
import "./modal.css";



const Accepted = () => {
  var show = 1;	
  var showHideClassName = show ? "modal display-block" : "modal display-none";
  const onClickedHandler=()=>{
       show =0;
  }

  return (
      <div className={showHideClassName}>
      <section className="modal-main">
        <h4>Password Accepted,Redirecting to first page as the application ends here.</h4>
	    <button onClick={onClickedHandler}>Close</button>
      </section>
    </div>
  );
};



export default Accepted;