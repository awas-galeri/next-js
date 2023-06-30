import Link from "next/link";
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
        {/* <p>Ini layout Setting</p> */}
      </div>
      {children}
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link href="/setting" style={{ color: "red", fontWeight: "bold" }}>
          Id 0 &nbsp;&nbsp;|
        </Link>
        <Link href="/setting/1" style={{ color: "red", fontWeight: "bold" }}>
          &nbsp;&nbsp; Id 1 &nbsp;&nbsp;|
        </Link>
        <Link href="/setting/2" style={{ color: "red", fontWeight: "bold" }}>
          &nbsp;&nbsp; Id 2 &nbsp;&nbsp;|
        </Link>
        <Link href="/setting/3" style={{ color: "red", fontWeight: "bold" }}>
          &nbsp;&nbsp; Id 3
        </Link>
      </div>
    </main>
  );
}
