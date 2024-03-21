import React from "react";

const page = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  return <h1>영화디테일 id : {id}</h1>;
};

export default page;
