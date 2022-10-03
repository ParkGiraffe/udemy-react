import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 20),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.78,
    date: new Date(2022, 2, 20),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.89,
    date: new Date(2022, 2, 20),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHanlder = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });  
  };

  return (
    // jsx[javascript xml] - react팀에서 개발한 구문으로 js파일에서 html 문구를 사용할 수 있게 한다. 백그라운드에서 자동 변환 과정이 일어난다.
    <div>
      {/* 소문자로 시작 - html */}
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHanlder} />
      {/* 대문자로 시작 - 컴포넌트 */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
