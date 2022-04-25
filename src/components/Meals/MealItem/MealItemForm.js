import { useRef, useState } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enturedAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enturedAmountNumber < 1 ||
      enturedAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enturedAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {/* the input props are default props for input elements. wich is why we use ... to spread them in "Input.js"*/}
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};

export default MealItemForm;
