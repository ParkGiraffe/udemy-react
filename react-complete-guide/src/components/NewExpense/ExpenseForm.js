import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log('Title changed!');
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          {/* 사용자 입력을 받을 때 onChange props를 이용하면 모든 종류의 입력 타입에 대응할 수 있다. 인자로는 함수를 받는다. */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="Date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="newExpense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
