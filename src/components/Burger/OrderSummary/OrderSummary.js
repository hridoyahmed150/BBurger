import React from 'react';
import Auxiliary from './../../../hoc/Auxiliary';
import classes from './OrderSummary.module.css';
import Button from './../../UI/Button/Button';


const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredient).map((igkey)=>{
        return (
            <li key={igkey}>
                <span className={classes.ItemName}>{igkey}</span> : 
                {props.ingredient[igkey]}
            </li>
            )
    });
    return (
        <Auxiliary>
            <h3>
                Your Order
            </h3>
            <p>A delicious burger with the following ingredient:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                <strong>
                    Total Price : {props.price} Tk
                </strong>
            </p>
            <p>
                continue to checkout ?
            </p>
            <Button btnType="Danger" click={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" click={props.purchaseContinur}>Continue</Button>
        </Auxiliary>
    )
}

export default orderSummary;