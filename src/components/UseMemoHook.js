import React, { useState, useMemo } from 'react';

function UseMemoHook() {
  const [count, setCount] = useState(0);

  const memoizedCount = useMemo(() => {
    return count;
  }, [count]);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p>Count: {memoizedCount}</p>
    </div>
  );
}

export default UseMemoHook;
