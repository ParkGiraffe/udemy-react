import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    // jsx[javascript xml] - react팀에서 개발한 구문으로 js파일에서 html 문구를 사용할 수 있게 한다. 백그라운드에서 자동 변환 과정이 일어난다.
    <div>
      <h2>Let's get started!</h2> // 소문자로 시작 - html
      <ExpenseItem></ExpenseItem> // 대문자로 시작 - 컴포넌트
    </div>
  );
}

export default App;
