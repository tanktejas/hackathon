import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
} from "firebase/firestore";

import { db } from "../../ff";

import { addDoc, Timestamp } from "firebase/firestore";

import Details from "../Details/Details";

function AllCard() {
  const { schoid } = useParams();
  const [arrofdetail, setarrofdetail] = useState(null);

  useEffect(() => {
    const q = query(collection(db, "courses"));
    onSnapshot(q, (qS) => {
      let data = qS.docs;
      let final;
      data.filter((ele) => {
        if (ele.id == schoid) {
          final = ele;
        }
      });
      setarrofdetail(final.data());
    });
  }, []);

  if (arrofdetail == null) {
    return <h1>Loading...</h1>;
  }

  console.log(arrofdetail);
  return (
    <>
      <div>
        <Details data={arrofdetail} />
      </div>
    </>
  );
}

export default AllCard;
