import Link from "next/link";
import Image from "next/image";

import "./globals.css";
import { useEffect, useState } from "react";
import { Control } from "./Control";
import Navigation from "./components/Navigation";

export const metadata = {
  title: {
    template: "%s || 템플릿 튜토리얼",
    default: "튜토리얼",
  },
  description: "메타데이터 병합",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, {
  //   cache: "no-store",
  // });
  // const topics = await response.json();
  return (
    <html>
      <body>
        <h1>
          <Link href="/">
            <Image src="/dweax_logo.png" width={125} height={25} alt="" />
          </Link>
        </h1>
        <Navigation />
        {/* <ol>
          {topics.map((topic) => (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol> */}
        {children}
        {/* <Control /> */}
      </body>
    </html>
  );
}
