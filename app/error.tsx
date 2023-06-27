"use client";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-center" style={{ marginTop: "35px" }}>
      <h2>Ada yang salah!</h2>
      <button
        className="btn btn-neutral btn-sm mt-4"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Coba Lagi
      </button>
    </div>
  );
}
