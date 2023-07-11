import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Reset":
      return initialState;
    default:
      return state;
  }
};
function UseReducer() {
    const [count,dispatch] = useReducer(reducer,initialState)
  return <div>
    Count:{ count }<br/>
    <button onClick={() => dispatch('Increment')}>  +  </button>
    <button onClick={() => dispatch('Decrement')}>  -  </button>
    <button onClick={() => dispatch('Reset')}>  0  </button>
  </div>;
}

export default UseReducer;
