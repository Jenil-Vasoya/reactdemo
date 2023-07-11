import React, {useState, useCallback } from "react";
import TitleCallBack from "./TitleCallBack";
import CountCallBack from "./CountCallBack";
import ButtonCallBack from "./ButtonCallBack";

function UseCallBackParent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  },[salary]);

  return (
    <div>
      <TitleCallBack/>
      <CountCallBack text="Age" count={age} />
      <ButtonCallBack handleClick={incrementAge}>Increment Age</ButtonCallBack>
      <CountCallBack text="Salary" count={salary}></CountCallBack>
      <ButtonCallBack handleClick={incrementSalary}>Increment Salary</ButtonCallBack>
    </div>
  );
}

export default UseCallBackParent;
