import React, { useEffect, useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    // 사용자 데터를 입력하면
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    // 사용자가 입력을 끝내면 (인풋 포커스를 잃으면)
    return { value: state.value, isValid: state.value.includes("@") }; // 이 경우에는 action의 type이외에 페이로드 payload property를 받지 않기 때문에, state를 이용한 기존의 최신 state 스냅샷을 가져와서 사용한다.
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [email, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  // useEffect(() => {
  //   // setTimeout을 식별자(identifier)변수에 저장한 후, 브라우저 내장함수인 cleartimeout을 사용하여 setTimeout을 지울 수 있다. 0.5초 안에 value가 입력이 되면 setTimeout이 지워지기 때문에, useEffect의 의존성 변경에 따라 다시 처음부터 setTimeout이 실행되어 0.5초를 센다.
  //   const identifier = setTimeout(() => {
  //     console.log("Checking form validity!");
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   // 타이핑 시 작동 순서 : cleanup 콘솔이 뜬 이후에 'checkig form validity'가 뜬다.

  //   // 사용자가 다 입력한 후 유효성 검사 : 디바운싱이라고 표현. 사용자 입력을 디바운스(그룹화)
  //   return () => {
  //     console.log("CLEANUP");
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value.includes("@") && passwordIsValid);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            email.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;