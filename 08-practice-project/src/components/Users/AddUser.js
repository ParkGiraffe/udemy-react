import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';


const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }
  return (
    // Card는 커스텀 컴포넌트이고 내장 Html 컴포넌트가 아니다. 
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        {/* html의 for attribute를 jsx에서는 htmlFor이라고 부른다. for은 js의 예약어라서 그렇다. */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser