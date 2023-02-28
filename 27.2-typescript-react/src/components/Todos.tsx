import React from "react";
import Todo from "../models/todo";

// 직접 생성한 class는 단순히 생성자 역할을 할 뿐만 아니라, type 역할도 한다. class 이름을 그대로 타입으로 사용할 수 있다.
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
