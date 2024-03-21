"use client";

import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;

        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };

        fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.refresh();
            router.push(`read/${lastid}`);
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="제목" />
      </p>
      <p>
        <textarea name="body" placeholder="내용" />
      </p>
      <p>
        <input type="submit" value="생성" />
      </p>
    </form>
  );
}
