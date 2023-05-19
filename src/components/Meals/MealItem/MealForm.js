import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputItemRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const itemAmount = inputItemRef.current.value;
    const itemAmountNumber = +itemAmount;

    if (
      itemAmount.trim().length === 0 ||
      itemAmountNumber < 1 ||
      itemAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddItem(itemAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        ref={inputItemRef}
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
      {!amountIsValid && <p>Please enter a valid number (1-5)</p>}
    </form>
  );
};

export default MealForm;
