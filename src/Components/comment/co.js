import React, { useState, useEffect } from "react";

import { db } from "../DB/firebase";
import "./general.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { query, orderBy, onSnapshot, doc } from "firebase/firestore";

import Coforum from "./comentforum";
import Singleco from "./singalco";

import { setDoc, Timestamp } from "firebase/firestore";

const month = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "sep",
  "Oct",
  "Nov",
  "Dec",
];

function Comment() {
  const [comment, setcomment] = useState(undefined);
  const [rootcom, setroot] = useState(undefined);

  const addComment = async (uname, text, parentid = 0) => {
    const docData = {
      body: text,
      createdat:
        new Date().getDate() +
        " " +
        month[new Date().getMonth()] +
        " " +
        new Date().getFullYear(),
      parentid: parentid,
      username: uname,
      id: comment.length + 1,
    };

    addDoc(collection(db, "FAQ"), docData)
      .then((result) => {
        setcomment([...comment, result]);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    const q = query(collection(db, "FAQ"));
    onSnapshot(q, (qS) => {
      let data = qS.docs;
      let tmp = data.map((item) => {
        return item.data();
      });

      setcomment(tmp);
      setroot(
        tmp
          .filter((ele) => {
            return ele.parentid == 0;
          })
          .sort((a, b) => {
            if (a.id < b.id) return -1;
            else return 1;
          })
      );
    });
  }, []);

  const getreply = (cid) => {
    console.log(cid);
    return comment.filter((item) => {
      return item.parentid == cid;
    });
  };

  if (comment == undefined || rootcom == undefined) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }

  return (
    <>
      <div className="comments">
        <h3 className="comment-title">Comments</h3>
        <div className="coment-form-title">Write comment</div>
        <Coforum submitLabel="Write" handleSubmit={addComment} />
        <div className="comment-container">
          {rootcom.map((item) => {
            return (
              <>
                <Singleco data={item} replies={getreply(item.id)} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Comment;
