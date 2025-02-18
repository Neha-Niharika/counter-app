import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count ={count}</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="btn btn-outline-danger"
      >
        Increase
      </button>
      <button
        onClick={() => setCount(count - 1)}
        className="btn btn-outline-primary"
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
