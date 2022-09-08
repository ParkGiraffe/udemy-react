import './ExpenseItem.css';

function ExpenseItem() {
  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.
    <div className = 'expense-item'> //JSX에서는 html의 class 명을 지을 때 class가 아닌 className을 사용해서 class명을 짓는다. (왜냐하면 class가 js에서 예약어기 때문이다.)
      <div className='expense-item__description'>March 28th 2021</div>
      <div className='expense-item__price'>
        <h2>Car insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;