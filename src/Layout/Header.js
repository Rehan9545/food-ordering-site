import { Fragment } from "react";
import mealsImg from "../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


const Header=props=>{
    const activate=event=>{
        props.againactivate();
    }
    return( <Fragment >
        <header className={classes.header}>
        <h1>ZAIQA</h1>
       
        <HeaderCartButton activate={activate}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
         <img src={mealsImg} alt="A TABLE FULL OF DELICIOUS FOOD" />
        </div>
    </Fragment>

    );
}

export default Header;