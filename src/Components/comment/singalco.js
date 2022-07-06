import React from "react";

function Singleco({ data, replies }) {
  return (
    <>
      <div className="comment">
        <div className="comment-image-container">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png"></img>
        </div>
        <div className="comment-right-part">
          <div className="comment-content">
            <div className="comment-author">{data.username}</div>
            <div>{data.createdat}</div>
          </div>
          <div className="comment-text">{data.body}</div>
          {replies.length > 0 && (
            <div className="replies">
              {replies.map((item) => {
                return (
                  <>
                    <Singleco data={item} replies={[]} />
                  </>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Singleco;
