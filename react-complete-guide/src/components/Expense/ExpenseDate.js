import './ExpenseDate.css';

function ExpenseDate(props) {
  // Date.toLocaleString()은 Date 객체의 날짜 정보를 인간이 읽기 쉬운 String 형태로 보여준다.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
}
export default ExpenseDate;
