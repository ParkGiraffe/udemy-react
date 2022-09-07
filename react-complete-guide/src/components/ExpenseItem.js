function ExpenseItem() {
  return (
    // 컴포넌트에서 jsx를 return할 때는 반드시 한 개의 루트 요소를 가진다. 그래서 <div></div>로 전체를 하나로 묶었다.
    <div>
      <div>March 28th 2021</div>
      <div>
        <h2>Car insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;