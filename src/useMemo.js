import React, { useState, useMemo } from "react";

function Computation() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);

  const memoizedValue = useMemo(() => {
    return a * b * Math.random();
  }, [a, b]);

  return (
    <div>
      The memoizedValue is: {memoizedValue}
      <button onClick={() => setA(a + 1)}>Change A</button>
      <button onClick={() => setB(b + 1)}>Change B</button>
    </div>
  );
}

export default Computation;
