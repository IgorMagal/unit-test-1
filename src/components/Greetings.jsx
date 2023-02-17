import React, { useState } from "react";
import Output from "./Output";

const Greetings = () => {
  const [changedTxt, setChangedTxt] = useState(false);

  const changeTxtHandler = () => {
    setChangedTxt((txt) => (txt = !txt));
  };

  return (
    <>
      <h2>Greetings!</h2>
      {changedTxt ? (
        <Output>
          <p>It's creepy to see you ew....</p>
        </Output>
      ) : (
        <Output>
          <p>It's good to see you.</p>
        </Output>
      )}
      <button onClick={changeTxtHandler}>ChangeTxt!</button>
    </>
  );
};

export default Greetings;
