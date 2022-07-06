import React, { useState } from "react";

function Coforum({ submitLabel, handleSubmit }) {
  const [txt, sette] = useState("");

  const submit = () => {
    handleSubmit("tejas", txt);
    // sette("");
  };

  return (
    <>
      <div>
        <textarea
          className="comment-form-textarea"
          value={txt}
          onChange={(e) => {
            sette(e.target.value);
          }}
        ></textarea>
        <button
          className="comment-form-button"
          disabled={txt == ""}
          onClick={submit}
        >
          {submitLabel}
        </button>
      </div>
    </>
  );
}

export default Coforum;
