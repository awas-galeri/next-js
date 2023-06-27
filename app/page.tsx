import React from "react";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h2 style={{ marginTop: "25px" }}>
        Ini adalah halaman Home dari folder{" "}
        <span className="btn btn-sm lowercase">/app</span>
      </h2>
    </div>
  );
}
