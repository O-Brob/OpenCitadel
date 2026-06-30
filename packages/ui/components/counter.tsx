import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <button type="button" className="counter" onClick={() => setCount((prevCount) => prevCount + 1)}>
      Count is: {count}
    </button>
  );
};

export default Counter;