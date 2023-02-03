import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changed, setChanged] = useState(false);

  const changeTextHandler = () => {
    setChanged(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changed && <Output>It's good to see you!</Output>}
      {changed && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
