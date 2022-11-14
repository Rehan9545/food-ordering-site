import classes from "./availableMeals.module.css"
import Card from "../UI/card";
import MealsItem from "./mealsItem/mealsItem";
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Biryani',
        description: 'Rice and meat are prepared separately, then combined and slow-cooked in the oven to create this aromatic “dry dish” ',
        price: 169,
    },
    {
        id: 'm2',
        name: 'Butter chicken',
        description: 'Typically a mild curry, it combines onions, butter and cream in a velvety smooth tomato sauce with chicken chunks.',
        price: 129,
    },
    {
        id: 'm3',
        name: 'Gulab Jamun',
        description: 'Of course, you need something deliciously sweet to finish off your Indian meal.',
        price: 40,
    },
    {
        id: 'm4',
        name: 'Korma',
        description: 'Korma is another one of the best Indian dishes to hail from northern India.',
        price: 340,
    },
];
const AvailableMeals = () => {
    const mealslist = DUMMY_MEALS.map(meal => <MealsItem key={meal.id} id={meal.id} meal={meal}></MealsItem>)
    return (
        <section className={classes.meals}>

            <Card>
                <ul>
                    {mealslist}
                </ul>
            </Card>

        </section>
    );
}

export default AvailableMeals;