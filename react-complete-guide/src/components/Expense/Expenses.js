import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={changeFilterHandler} /> 
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;

