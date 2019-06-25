import React from 'react';
import classes from './BuildControl.module.css';
const buildControl=(props)=>(
  <div>
    <div className={classes.BuildControl}>
      <div className={classes.label}>
        {props.label}
      </div>
      <button className={classes.less} onClick={props.remove} disabled={props.disabled}>Less</button>
      <button className={classes.more} onClick={props.added}>More</button>
    </div>
  </div>
);

export default buildControl;