import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(true); // 어차피 앱이 실행되자마자 바로 백엔드에서 데이터를 가져오기 때문에, 초기값을 true로 줘버려도 상관을 없을 경우가 있다.

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
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals(); // useEffect 내부에 async/await 함수를 만들고 호출하는 꼼수를 사용하면 된다.
  }, []);

  if (isloading) {
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }

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
