import React from "react";

import ExpenseForm from "./ExpenseForm";
import'./NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => { // ExpenseForm.js에서 받아온 데이터를 props로 받아온다.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // App.js에서 받아온 props를 실행한다.
  };


  return(
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;