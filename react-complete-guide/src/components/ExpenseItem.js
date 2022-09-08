import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurace';
  const expenseAmount = 294.67;


  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.
    <div className = 'expense-item'> //JSX에서는 html의 class 명을 지을 때 class가 아닌 className을 사용해서 class명을 짓는다. (왜냐하면 class가 js에서 예약어기 때문이다.)
      <div className='expense-item__description'>{expenseDate}</div>
      <div className='expense-item__price'>
        <h2>{expenseTitle}</h2> jsx 안에 중괄호를 사용하면 일반 자바스크립트 구문을 사용할 수 있다.
        <div>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;