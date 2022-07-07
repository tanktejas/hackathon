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
      let dataa = qS.docs;
      setsch(dataa);
      setperdata(dataa);
      setsta(true);
    });
  }, []);

  const [search, setsearch] = useState("");

  const filter = () => {
    let tt = [...per];
    let dd = "";
    
    setsch(
      tt.filter((item) => {
        console.log(item.data());
        return item
          .data()
          .name.toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      })
    );
    console.log(search);
    console.log(data);
  };

  //   console.log(data);
  if (!st) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <section class="bg-primary text-light p-5">
        <div class="container">
          <div class="d-md-flex justify-content-around align-items-center">
            <h3 class="mb-3 mb-md-0 cc">Search Competition</h3>

            <div class="input-group news-input">
              <input
                type="text"
                class="form-control"
                placeholder="Competition Name"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
              />
              <button
                class="btn btn-dark btn-lg"
                type="button"
                onClick={() => {
                  filter();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
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
