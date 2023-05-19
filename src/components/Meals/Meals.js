import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import Summary from "./Summary";

const Meals = () => {
  return <Fragment>
    <Summary />
    <AvailableMeals />
  </Fragment>;
};

export default Meals;
