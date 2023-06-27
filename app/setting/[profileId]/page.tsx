import React from "react";

export default function Detail({ params }: { params: { profileId: string } }) {
  return (
    <main>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: "25px" }}>Setting</h1>
      </div>
      <p style={{ display: "flex", justifyContent: "center" }}>
        Profile {params.profileId}
      </p>
    </main>
  );
}
