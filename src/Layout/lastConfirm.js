import Modal from "../UI/Modal";
import classes from "./lastConfirm.module.css"

const LastConfirm=props=>{
    return (
        <Modal>
          <div className={classes.actions}>
           <h2>Your Order is Successfull.! </h2>
           <h4>Thankyou For Ordering with ZAIQA</h4>
           <p>Your Order ID is 5000145</p>
           <button className={classes['button--alt']} onClick={props.onClick}>Close</button>

          </div>
        </Modal>
    );
}


export default LastConfirm;