import "./ExpenseItem.css";

// 리액트에서는 모든 props를 담은 하나의 매개변수만을 사용한다.(key:value 값으로 된 데이터를 리액트에서 자동으로 전달한다.) 이를 관용적으로 props라고 짓는다.
function ExpenseItem(props) {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurace';
  // const expenseAmount = 294.67;

  // Date.toLocaleString()은 Date 객체의 날짜 정보를 인간이 읽기 쉬운 String 형태로 보여준다.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.
    <div className="expense-item">
      {/* jsx에서는 html의 class 명을 지을 때 class가 아닌 className을 사용해서 class명을 짓는다. (왜냐하면 class가 js에서 예약어기 때문이다.) */}
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          {/* jsx 안에 중괄호를 사용하면 일반 자바스크립트 구문을 사용할 수 있다. */}
          <div>${props.amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
