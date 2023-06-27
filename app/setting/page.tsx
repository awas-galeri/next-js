import React from "react";
import Profile from "./profile";

export default function Setting() {
  return (
    <main>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>Setting</h1>
      </div>
      <span style={{ display: "flex", justifyContent: "center" }}>
        <Profile />
      </span>
    </main>
  );
}
