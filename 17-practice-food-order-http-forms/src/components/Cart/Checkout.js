import React from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.contrl}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.contrl}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.contrl}>
        <label htmlFor="Postal">Postal Code</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.contrl}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" />
      </div>
      <button type="button" onClick={props.onClose}>
        cancel
      </button>
      <button>confirm</button>
    </form>
  );
};

export default Checkout;
