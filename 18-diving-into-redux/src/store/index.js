import { createStore } from "redux";

const initialState = {
  counter: 1,
  showCounter: true,
};



const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // state.counter++; <-- Redux로 작업할 때는 절때 원본 state 객체를 수정해서는 안 된다. 버그 발생 및 프로그램 디버깅에 어려움이 발생한다. UI 더 이상 업데이트가 되지 않을 수도 있다. 그러므로 항상 새로운 객체를 반환해주자.

    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
