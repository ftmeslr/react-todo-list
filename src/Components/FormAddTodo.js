import { React, useState } from "react";
import { useFormik } from "formik";

const FormAddTodo = (props) => {
  const [text, setText] = useState([]);
  const inputHandler = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.add(text);
  };

  return (
    <form
      className="form-group"
      style={{ display: "flex" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="text"
        className="form-control mx-sm-3"
        placeholder="i want to do ..."
        onChange={inputHandler}
        value={text}
      />
      <button type="submit" className="btn btn-primary">
        add
      </button>
    </form>
  );
};

export default FormAddTodo;
