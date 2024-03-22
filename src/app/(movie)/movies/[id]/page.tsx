import { API_URL } from "@/app/(home)/page";
import MovieInfo from "@/app/components/movie-info";
import MovieVideos from "@/app/components/movie-videos";
import { Suspense } from "react";

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>영화 상세페이지</h1>
      <Suspense fallback={<h2>영상 로딩중...</h2>}>
        <MovieVideos id={id} />
      </Suspense>
      <Suspense fallback={<h2>정보 로딩중...</h2>}>
        <MovieInfo id={id} />
      </Suspense>
    </div>
  );
}
