import React from "react";

function ButtonCallBack({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
}

export default React.memo(ButtonCallBack);
