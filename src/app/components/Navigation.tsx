"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navigation = () => {
  const path = usePathname();
  const [count, setCount] = useState<number>(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home </Link> {path === "/" ? "💡" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "💡" : ""}
        </li>
        {/* <li>
          <button onClick={() => setCount((a) => a + 1)}>{count}</button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
