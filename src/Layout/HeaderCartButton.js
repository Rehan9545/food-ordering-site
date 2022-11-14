import CartIcon from "../Cart/carticon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../store/cart-content";
import { useContext,useEffect,useState } from "react";

const HeaderCartButton = props => {
    const[btnLighted,setBtnLighted]= useState(false);
    const cartCtx= useContext(CartContext);
    const {items}=cartCtx
    const numerItems=items.reduce((curNumer,item)=>{
        return curNumer+item.amount;
    },0);
    
     

    const btnClasses=`${classes.button} ${btnLighted ? classes.bump : ""}`;

    useEffect(()=>{
        if(items.length===0){
            return;
        }
      setBtnLighted(true);

     setTimeout(()=>{
        setBtnLighted(false);
      },300);

    //   return ()=>{
    //     clearTimeout(timer);
    //   }
    },[items]);

    return (
        <button className={btnClasses} onClick={props.activate}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>YOUR CART</span>
            <span className={classes.badge}>
                {numerItems}
            </span>
        </button>

    );
}

export default HeaderCartButton;