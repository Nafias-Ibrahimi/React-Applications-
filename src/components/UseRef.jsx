import React from "react";
import { useRef } from "react";

function UseRef() {
  const InputRef = useRef(null);
  const handleFocus = () => {
    InputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={InputRef} placeholder="Enter your useRef.." />

      <button onClick={handleFocus}>Focus input</button>
    </div>
  );
}

export default UseRef;
