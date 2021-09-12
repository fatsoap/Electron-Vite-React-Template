import React, { useState } from "react";
import "./app.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h2>This is React + Vite + Electron !</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
};

export default App;
