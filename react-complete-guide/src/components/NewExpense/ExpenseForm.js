import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // 한 컴포넌트에 여러 개의 state를 가져도 각자 개별적으로 잘 동작한다.

  // 세 개의 독립적인 state를 갖는 방식이 아니라 하나의 state에 모두 포함시키는 방법이 있다.
  // 하나의 useState를 사용하고 객체를 전달하는 방식을 이용하면 여러 개의 state를 한 번에 선언할 수 있다. 이 방식의 경우 하나의 state를 업데이트 할 때마다 한 개가 아니라 모든 property를 같이 업데이트 해야 한다.
//  const [userInput, setUserInput] = useState({
//   enteredTitle: '',
//   enteredAmount: '',
//   enteredDate: '',
//  });

  const titleChangeHandler = (event) => {
    // onChange는 핸들러에 event object를 전달한다. event 안에는 여러 property가 존재하는데, 그중에서 target 필드가 있다. target은 이벤트가 발생하는 DOM을 가리키고, 그 안의 value 필드에는 사용자가 입력한 값이 담겨 있다.
    setEnteredTitle(event.target.value);
    // 바뀐 값을 저장하기 위해 setState를 사용한다. 이러한 방식으로 저장을 하면 컴포넌트 함수의 수명 주기와는 별개로 변수를 저장할 수 있게 된다. 그래서 이 컴포넌트 함수가 얼마나 자주 다시 실행되는 지에 상관 없이 이 state는 저장되고 살아 있다.

    
    // setState 함수는 State 안에 있는 모든 값을 덮어 씌우기 때문에, 인자로 object를 넘길 때 수정되지 않을 property의 기존값도 포함해서 넘겨줘야 한다. 이때 JS의 spread 연산자를 사용하면 된다.
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value, // 기존의 enteredTitle을 override.
    // });

  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
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
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="newExpense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
