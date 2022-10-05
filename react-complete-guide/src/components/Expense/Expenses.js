import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    {
      /*JS에 내장된 Array.prototype.map()을 이용해서 Array로 이루어진 Props를 한 번에 컴포넌트에 렌더링할 수 있다. map() array를 리턴하는데, 리액트는 jsx(컴포넌트)로 이루어진 array를 자동으로 나란히 렌더링해준다. */
    }
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={changeFilterHandler}
        />
        <ExpensesList items={filteredExpenses} />
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
