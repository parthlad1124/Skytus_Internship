import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const maxLimit = 10;

  const handleIncrease = () => {
    if (count < maxLimit) {
      setCount(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => setCount(0);

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter App</h1>
      <h2 className={`mb-3 ${count === maxLimit ? 'text-warning' : ''}`}>{count}</h2>

      {/* Warning Message */}
      {count === maxLimit && (
        <p className="text-danger fw-bold">
          Maximum limit reached! Cannot increase further.
        </p>
      )}

      <div className="d-flex justify-content-center gap-3 mt-3">
        <button
          className="btn btn-success btn-hover"
          onClick={handleIncrease}
        >
          Increase
        </button>

        <button
          className="btn btn-danger btn-hover"
          onClick={handleDecrease}
          disabled={count === 0}
        >
          Decrease
        </button>

        <button className="btn btn-secondary btn-hover" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
