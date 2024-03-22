import { API_URL } from "../(home)/page";

async function getVideos(id: string) {
  console.log(`영화 예고편 가져오는중: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  throw new Error("에러");
  //   const response = await fetch(`${API_URL}/${id}/videos`);
  //   return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
