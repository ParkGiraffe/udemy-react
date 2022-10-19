import React from 'react';


// 이름을 AuthContext라고 지정한 이유 : AuthContext자체는 컴포넌트가 아니지만, 컴포넌트를 포함할 객체이기 때문에 컴포넌트 처럼 UpperCamelCase로 지정
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;