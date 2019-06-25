import React from 'react';
import classes from './Model.module.css';
import Auxiliary from './../../../hoc/Auxiliary';
import Backdrop from './../Backdrop/Backdrop';


const model=(props)=>(
    <Auxiliary>
        <Backdrop show={props.show} clicked={props.modelClosed}/>
        <div 
        className={classes.Model}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity : props.show ? '1' : '0'
        }}
        >
            {props.children}
        </div>
    </Auxiliary>
)
export default model;