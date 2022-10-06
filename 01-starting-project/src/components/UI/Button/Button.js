import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;
// Tagged Template Literal : 자바스크립트의 기본 기능으로 이 패키지나 리액트에 특화된 것은 아니다. 어떤 자바스크립트 프로젝트에서도 사용할 수 있다. button은 styled 객체의 메소드이다. button은 styled 객체의 메소드이고, styled는 styled-components에서 임포트하는 객체이고 button 메소드에 접근할 수 있습니다. ()과 아니라 백틱(``)을 붙여서 사용합니다. 백틱을 붙여서 사용하는 구문이 바로 자바스크립트의 기본적인 구문 (tagged template literal) 입니다. 추가적인 공부 따로 하기 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
// 이 백틱 사이에 전달하는 것이 Button 메소드로 간다. 그리고 이 button 메소드가 새로운 Button 컴포넌트를 반환한다. 우리는 백틱 사이에 스타일을 전달한다.
// 컴포넌트 단위로 css class를 지정해줘야 하기 때문에 자동으로 암호같은 class를 생성해서 넣어준다.
// 클래스의 가상선택자(.)의 경우에는 styled-components 패키지에서 &기호를 사용한다.
// styled 패키지는 모든 html element를 가지고 있다.

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
