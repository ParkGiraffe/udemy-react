import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    
    // 유효성 검사
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    // Card는 커스텀 컴포넌트이고 내장 Html 컴포넌트가 아니다.
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        {/* html의 for attribute를 jsx에서는 htmlFor이라고 부른다. for은 js의 예약어라서 그렇다. */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enteredAge}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enteredUsername}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
