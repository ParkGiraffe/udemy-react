import { useState } from "react";

const Greeting = () => {
  const [changed, setChanged] = useState(false);

  const changeTextHandler = () => {
    setChanged(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changed && <p>It's good to see you!</p>}
      {changed && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
