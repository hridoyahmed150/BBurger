import React from 'react';

import Burger from './../../Burger/Burger';
import Button from './../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';


const checkoutSummary=(props)=>{
  return (
    <div className={classes.CheckoutSummary}>
      <h1>
        working
      </h1>
      <div style={{width:'100%',height: '100%',margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" click={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" click={props.checkoutContinue}>
          Continue
      </Button>
    </div>
  )
}

export default checkoutSummary;