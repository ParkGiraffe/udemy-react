import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amoount}
        date={props.expenses[0].date}
      />
    </div>
  );
}
export default Expenses;
