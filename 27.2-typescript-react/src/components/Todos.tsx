import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';

// 직접 생성한 class는 단순히 생성자 역할을 할 뿐만 아니라, type 역할도 한다. class 이름을 그대로 타입으로 사용할 수 있다.
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
