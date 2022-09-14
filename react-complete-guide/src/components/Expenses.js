import './Expenses.css';

function Expenses(props) {
  return (
    <div>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amoount}
        date={props.items[0].date}
      />
    </div>
  );
}
export default Expenses;
