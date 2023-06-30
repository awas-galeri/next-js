import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        {/* <p>Ini layout Products</p> */}
      </div>
      {children}
    </main>
  );
}
