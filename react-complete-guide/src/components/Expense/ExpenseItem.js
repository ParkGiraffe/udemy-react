import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// 리액트에서는 모든 props를 담은 하나의 매개변수만을 사용한다.(key:value 값으로 된 데이터를 리액트에서 자동으로 전달한다.) 이를 관용적으로 props라고 짓는다.
const ExpenseItem = (props) => {

  let title = props.title;
  // 핸들러 함수명 관례 : 트리거 이벤트 + handler
  const clickHandler = () => {
    title = 'Updated';
    console.log(title) // title 변수 값은 변경되어있지만, DOM에는 변경사항이 반영되어 있지 않는다. 왜냐하면 react는 jsx로 이루어진 컴포넌트를 실행하면서 DOM을 생성하는데, 이런 방식의 update는 jsx 컴포넌트를 새로 생성하지 (덮어 씌우지) 않기 때문이다. 이 문제를 해결하기 위해 react는 state 개념을 도입한다.
  };
  

  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.

    // 사용자 생성 컴포넌트에서 className을 지정하기 위해서는 약간의 조정이 필요하다.
    <Card className="expense-item">
      {/* jsx에서는 html의 class 명을 지을 때 class가 아닌 className을 사용해서 class명을 짓는다. (왜냐하면 class가 js에서 예약어기 때문이다.) */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          {/* jsx 안에 중괄호를 사용하면 일반 자바스크립트 구문을 사용할 수 있다. */}
          ${props.amount}
        </div>
        <button onClick={clickHandler}>Change Title</button>
        {/* 이벤트리스너는 on으로 시작하는 props를 이용해서 생성할 수 있다. on으로 시작하는 props들은 항상 함수를 인수로 받아야 하고, 이 함수는 onProps 이벤트가 발생했을 때 실행되어야 한다.
        clickHandler()처럼 괄호를 붙이지 않고 함수명만 적은 이유는 무엇일까?
        만약에 ()를 적는다면 실행한다는 의미가 되어서, jsx코드가 평가될 때 자동으로 실행된다. ()를 붙이지 않음으로써 onClick props에 함수가 담긴 상수의 포인터를 연결해주고, 클릭 이벤트가 일어났을 때만 실행할 수 있게 끔 하는 것이다. 
        */}
        {/* 모든 jsxdp 내장된 html 요소들은 onClick과 같은 이벤트 리스너를 추가할 수 있다. - onClick은 모든 요소에서 기본적으로 사용가능하고 일부 이벤트는 경우에 따라 다르다. */}
      </div>
    </Card>
  );
};

export default ExpenseItem;
