import React, { useState } from "react";

const EditTodo = (props) => {
  const [text, setText] = useState(props.text);

  const inputHandler = (e) => setText(e.target.value);
  return (
    <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <input
          value={text}
          onChange={inputHandler}
          className="form-control"
        ></input>
        <div>
          <button
            type="button"
            className="btn btn-info btn-sm m-1"
            onClick={() => props.edit(text)}
          >
            edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
