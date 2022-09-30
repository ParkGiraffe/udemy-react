import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
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

  const submitHandler = (event) => {
    // submit이 작동되면 브라우저는 폼이 제출될 때마다 이 웹페이지를 호스팅하고 있는 서버에 요청을 보낸다. 그럴때마다 페이지가 초기화된다. 우리가 원하는 것은 자바스크립트를 이용해서 데이터를 수집하고 결합해서 form을 제출하도록 하고 싶다. 이때 기본 동작을 막는 방법이 있다. 그것은 바로 preventDefault()를 사용하는 것이다. preventDefault는 기본 요청이 보내지는 것을 막는다. 그리고 그 요청이 보내지지 않기 때문에 페이지는 다시 로드되지 않는다. 그리고 우리는 자바스크립트로 계속 이 form을 다룰 수 있다.
    event.preventDefault();

    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseDate);

    // 여기에서 state가 재설정되면, input의 value도 state의 변경을 입력받아서 DOM을 업데이트한다.
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    // <form />태그가 존재하고 <button />태그의 type attr이 submit이라면, button태그의 onClick 보다는 form태그의 onSubmit을 이용해주자. submit에 관하여 브라우저나 웹페이지가 내장하고 있는 기능을 사용할 수 있기 때문이다.
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* state를 사용하면 양방향 바인딩이 가능하다는 장점이 있다. input의 value가 변경되는 것을 수신할 뿐만 아니라, input에 새로운 value를 전달할 수도 있다. 그래서 input의 value를 한 번에 재설정하거나 입력할 수 있다. 이는 input 태그의 value attribute를 추가하면 된다. */}
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* 사용자 입력을 받을 때 onChange props를 이용하면 모든 종류의 입력 타입에 대응할 수 있다. 인자로는 함수를 받는다. */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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


