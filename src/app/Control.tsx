"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export function Control() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  return (
    <ul>
      <li>
        <Link href="/create">생성</Link>
      </li>
      {id ? (
        <>
          <li>
            <Link href={`/update/${id}`}>업데이트</Link>
          </li>
          <li>
            <input
              type="button"
              value="삭제"
              onClick={() => {
                const options = { method: "DELETE" };
                fetch(`http://localhost:9999/topics/${id}`, options)
                  .then((res) => res.json())
                  .then((result) => {
                    console.log(result);
                    router.push("/");
                    router.refresh();
                  });
              }}
            />
          </li>
        </>
      ) : null}
    </ul>
  );
}
