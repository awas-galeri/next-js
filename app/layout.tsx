"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css";

export const metadata = {
  title: "Belajar Next JS",
  description: "Generated by Next.js",
};

export default function layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onClickUrl = (url: string) => {
    router.push(url);
  };

  return (
    <html lang="en">
      <head />
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "15px",
            color: "blue",
            fontWeight: "bold",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => onClickUrl("/setting")}
          >
            Setting
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
