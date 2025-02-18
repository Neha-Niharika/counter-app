import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count ={count}</h1>
      <button className="btn btn-outline-danger" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
      <button onClick={() => setCount(0)} className="btn btn-outline-secondary">
        Reset
      </button>
    </>
  );
}
export default Counter;
