import React, {useState, useEffect} from "react";

// 이름을 AuthContext라고 지정한 이유 : AuthContext자체는 컴포넌트가 아니지만, 컴포넌트를 포함할 객체이기 때문에 컴포넌트 처럼 UpperCamelCase로 지정
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {}, // 더미 함수를 선언해주면, 나중에 사용할 때 IDE가 자동 완성을 해주기 때문에 편리하다.
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.getItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext
