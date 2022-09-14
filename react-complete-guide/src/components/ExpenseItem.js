import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

// 리액트에서는 모든 props를 담은 하나의 매개변수만을 사용한다.(key:value 값으로 된 데이터를 리액트에서 자동으로 전달한다.) 이를 관용적으로 props라고 짓는다.
function ExpenseItem(props) {

  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.

    // 사용자 생성 컴포넌트에서 className을 지정하기 위해서는 약간의 조정이 필요하다.
    <Card className="expense-item">
      {/* jsx에서는 html의 class 명을 지을 때 class가 아닌 className을 사용해서 class명을 짓는다. (왜냐하면 class가 js에서 예약어기 때문이다.) */}
      <ExpenseDate date = {props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          {/* jsx 안에 중괄호를 사용하면 일반 자바스크립트 구문을 사용할 수 있다. */}
          <div>${props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
