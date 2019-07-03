import React from 'react';
import classes from './Logo.module.css';
import BurgerLogo from './../../assets/Images/burger-logo.png';

const logo=()=>(
    <div className={classes.Logo}>
        <img  src={BurgerLogo} alt='logo'/>
    </div>
)

export default logo;