import { useContext } from "react";
import CartContext from "../../store/cart-content";
import MealsItemForm from "./mealsItemForm";
import classes from "./mealsItem.module.css";
const MealsItem=props=>{
    const ctx=useContext(CartContext);
    const addToCartHandler=amount=>{
    ctx.addItem({
        id:props.id,
        name:props.meal.name,
        amount:amount,
        price:props.meal.price,
    })

    }

        return(
           <li className={classes.meal}>
            <div>
                <h3>{props.meal.name}</h3>
                <div className={classes.description}>{props.meal.description}</div>
                <div className={classes.price}>Rs {props.meal.price}</div>
            </div>
            <div>
                <MealsItemForm id={props.meal.key} onAddToCart={addToCartHandler}></MealsItemForm>
            </div>
           </li>
        );

}

export default MealsItem;