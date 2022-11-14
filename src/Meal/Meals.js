import { Fragment } from "react";
import MealSummary from "./mealsSummary";
import AvailableMeals from "./availableMeals";
const Meals = () => {
    return (
        <Fragment>
            <MealSummary></MealSummary>
            <AvailableMeals></AvailableMeals>
        </Fragment>
    );
}


export default Meals;