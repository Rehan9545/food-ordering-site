import { useContext } from "react";
import CartContext from "../store/cart-content";
import classes from "./cart.module.css"
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = props => {

    const ctx = useContext(CartContext);

    const totalAmount = `Rs ${ctx.totalAmount}`;
    const hasItems = ctx.items.length > 0;

    const cartItemRemoveHandler = item => {
       ctx.removeItem(item);

    }
    const cartItemAddHandler = item => {
        ctx.addItem({
            id: item.id,
            name: item.name,
            amount: 1,
            price: item.price,
        })

    }

    const cartItems = <ul className={classes["cart-items"]}>{
        ctx.items.map(item => <CartItem key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        >

        </CartItem>)}
    </ul>;

    return (
        <Modal onClick={props.onClick}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClick}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}


            </div>

        </Modal>
    );
}

export default Cart;