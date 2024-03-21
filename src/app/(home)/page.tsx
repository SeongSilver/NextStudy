"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "홈인디",
// };

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return <>{isLoading ? "로딩중..." : JSON.stringify(movies)}</>;
}
