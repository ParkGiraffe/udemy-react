import "./Card.css";

// 재사용가능한 래퍼 컴포넌트 만드는 법 - props.children을 사용하면 된다. 이때 children은 예약어이다.

const Card = props => {
  // className에 들어갈 String을 따로 빼주면, 커스텀 컴포넌트에서도 className props를 설정해줄 수 있다.
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
