export default async function AboutUsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`, {
  //   cache: "no-store",
  // });
  // const topics = await response.json();

  return <div>{children}&copy; Next JS is great!</div>;
}
