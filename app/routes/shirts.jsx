import { useLoaderData } from "@remix-run/react";

import { db } from "./../../db.server.ts";
export const loader = async () => {
  return db();
};

export default function Shirt() {
  const data = useLoaderData();
  // console.log(data, "fromo database");
  let arr = [];
  for (let index = 0; index < data[0].length; index++) {
    arr.push(data[0][index]);
  }
  return (
    <div className="flex">
      <h1> array of table </h1>

      <ul>
        {data[0].map(el=> {
          return <div key={el.id}>
            <li > { console.log(el) } </li>
          
          </div>
        } )}
      </ul>
    </div>
  );
}
