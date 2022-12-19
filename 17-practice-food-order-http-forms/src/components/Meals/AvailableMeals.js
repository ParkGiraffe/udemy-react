import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  // useEffect의 콜백함수에 바로 async를 적용하는 것은 금지! - 허용되지 않는 작업이다.
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-6e4f6-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
    };

    setMeals(loadedMeals);
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
