import React, { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, sans-serif",
        background:
          "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(236,72,153,0.2))"
      }}
    >
      <h1>Terraform + Docker + TS Frontend</h1>
      <p>Small React + TypeScript app deployed via Terraform.</p>
      <button
        onClick={() => setCount((c) => c + 1)}
        style={{
          marginTop: "1rem",
          padding: "0.6rem 1.2rem",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
          boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
        }}
      >
        You clicked {count} times
      </button>
    </div>
  );
};

export default App;
