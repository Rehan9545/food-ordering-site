import classes from "./mealsItemForm.module.css"
import Input from "../../UI/input";
import { useRef, useState } from "react";
const MealsItemForm = props => {
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        // console.log(amountInputRef.current.value);
        event.preventDefault();
        const senterdAmount = amountInputRef.current.value;
        const enterdAmount = +senterdAmount;

        if(enterdAmount<1||enterdAmount>5){
           setAmountIsValid(false);  

        }

        props.onAddToCart(enterdAmount);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="amount"
                input={{
                    id: "amount" + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"

                }}

            />
            <button>+ Add</button>
            {!amountIsValid && <p>PLEASE ENTER A VALID AMOUNT BETWEEN 1 TO 5</p>}
        </form>
    );
}


export default MealsItemForm;