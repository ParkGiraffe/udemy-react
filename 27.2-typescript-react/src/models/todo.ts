class Todo {
  // 바닐라 자바스크립트는 property를 생성자 함수에서 선언하면 됐지만, 타입스크립트에서는 생성자함수 이전에 미리 property를 정의하고 타입을 명시해놔야 한다.
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;
