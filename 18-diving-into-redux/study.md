# \[18-238\] 리액트 앱의 state에 대한 또 다른 관점

  

리덕스란?

리덕스 : 앱 전반의 모든 컴포넌트를 아우르는 state 관리 시스템이다.

state를 변경하고 화면에 표시하는 데이터를 관리하도록 도와주는데, 다수의 컴포넌트, 앱 전체에서 관리하도록 도와준다.

  
  
  

리액트에서 state는 3종류가 있다.

local state - 데이터가 변경되면, 하나의 컴포넌트에 속하는 UI에 영향을 미치는 state

Ex: 버튼을 누르면 어떤 정보가 표시되고, 한 번 더 누르면 정보가 다시 사라진다.

→ useState나 useReducer를 사용해서 컴포넌트 안에서 state를 관리한다.

  

cross-component state - 하나의 컴포넌트가 아니라 다수의 컴포넌트에 영향을 미치는 state

Ex: 모달 컴포넌트는 다수의 컴포넌트에 영향을 준다. 모달 컴포넌트를 여는 버튼은 모달 외부에 존재하고, 모달 안쪽의 버튼을 눌러서 모달을 닫을 수도 있다. 이처럼 다수의 컴포넌트가 협력해서 모달을 표시하거나 감추는 상황이다.

→ useState나 useReducer로 구현할 수 있는데, 이때는 주변 컴포넌트에 props를 전달해야 한다. 이를 props 체인 또는 props 드릴링라고 부른다.

  

app-wide state - 애플리케이션의 모든 컴포넌트에 영향을 미치는 state이다. 

Ex: 사용자 인증이 있다. 로그인의 유무는 로그인 버튼의 유무를 결정할 뿐만 아니라,  컴포넌트 전반에 영향을 미친다.

→ useState나 useReducer와 props를 이용해서 관리를 할 수는 있는데 너무 번거롭다. 그래서 리액트 컨텍스트가 존재한다. 리액트 컨텍스트는 리액트의 내장 기능으로, cross-component state나 app-wide state를 쉽게 관리하도록 해준다.

그리고 리덕스도 리액트 컨텍스트와 같은 문제를 해결해줍니다. 그러면 리덕스는 리액트 컨텍스트와 무엇이 다른걸까요? 왜 필요한 걸까요?





# \[18-239\] 리덕스 vs 리액트 컨텍스트

  

리액트 컨텍스트에는 ‘잠재적인' 단점이 있다. ‘잠재적'이다보니 항상 문제가 되는 것인 아니긴 하지만 말이다.

  

참고로 리덕스와 리액트 컨텍스트 둘 다 동시에 사용할 수는 있다. 근데 복잡해지니 선택에 신중해야 한다.

  

  

**리액트 컨텍스트의 단점**

- 리액트 컨텍스트를 이용한 state management는 사용이 복잡하다는 점.

리액트 컨텍스트는 설정이 아주 복잡하다. 비록 소형 또는 중형 크기의 앱이면 문제가 안 될 수 있지만, 엔터프라이즈 수준의 대형 애플리케이션일 경우 



```
    return (
      <AuthContextProvider>
        <ThemeContextProvider>
          <UIInteractionContextProvider>
            <MultiStepFormContextProvider>
              <UserRegistration />
            </MultiStepFormContextProvider>
          </UIInteractionContextProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    );

```

  

이런 끔찍한 코드가 나올 수 있다.

대형 앱에서는 app-wide state나 cross-component state가 많이 존재한다. 그래서 그런 state들을 관리하기 위한 아주 다양하고 많은 ContextProvider 컴포넌트가 존재한다. 그래서 이런 JSX 컴포넌트가 나오게 된다.

  

물론 다양하고 많은 ContextProvider를 구축할 필요는 없다. 큰 컨텍스트 하나에 모든 state를 집어넣으면 되긴 하다. 근데 그러면, 큰 ContextProvider를 구축하고 관리하는 데에 큰 어려움이 생기고 만다.



하나의 ContextProvider로 많은 일을 맡아서 해야하기 때문이다. 사용자 인증, 사이트 테마, 사용자의 입력, 모달 표시 여부 뿐만 아니라 정말 다양한 것들을 종합적으로 관리하게 된다. 그래서 단점이 된다.

  

당장은 대형 앱을 만들지 않으니 모를 수 있다. 그래서 ‘잠재적인'문제라고 하는 것이다.

  

  

- 리액트 컨텍스트를 사용하면 성능(퍼포먼스)에 좋지 않는다는 점

리액트 컨텍스트의 또 다른 잠재적인 단점으로 ‘퍼포먼스'문제가 있다.

  

리액트 공식 팀원의 comment에 따르면, 리액트 컨텍스트는 **‘테마 변경, 사용자 인증'과 같은 업데이트 빈도가 낮은 state에서는 아주 좋지만, 업데이트 빈도가 잦은 (데이터 변경이 잦은) state에서는 좋지 않다**고 언급되어 있습니다.

  

마지막 문장을 보면, 컨텍스트는 ‘Flux-like state propagation’을 대체할 수 없다고 나옵니다. ‘유동적인 상태 (확산)관리’의 의미를 지니는데요, 리덕스는 유동적인 상태 관리 (Flux-like state management) 라이브러리입니다. 

즉, 리액트 컨텍스트가 모든 경우에서 리덕스를 훌륭하게 대체할 수 없음을 말해주고 있습니다.