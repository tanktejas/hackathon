import React, { useState, useEffect } from "react";

import { db } from "../../ff";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";

import CompiCard from "./CompiCard";

function Compihome() {
  const [data, setsch] = useState([]);
  const [per, setperdata] = useState([]);
  const [st, setsta] = useState(true);

  useEffect(() => {
    setsta(false);
    const q = query(collection(db, "competition"));
    onSnapshot(q, (qS) => {
      let data = qS.docs;
      setsch(data);
      setperdata(data);
      setsta(true);
    });
  }, []);
  console.log(data);
  if (!st) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>
        {data.map((item) => {
          return (
            <>
              <CompiCard
                name={item.data().name}
                Tagline={item.data().Tagline}
                link={item.data().link}
                Round={item.data().Round}
                participant={item.data().participant}
                tag={item.data().tag}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Compihome;
