import React, { useState, useContext } from "react";
import Context from "../components/contextTodo/context";

const Form = () => {
  const [form, setForm] = useState("");
  const [error, setError] = useState(false);
  const { ADD_TASK } = useContext(Context);

  const handleChange = (e) => {
    setForm(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    if (form.trim().length <= 0) {
      setError(true);
      return;
    }
    ADD_TASK(form);
    setForm("");
    setError(false);
  };
  return (
    <>
      {error && (
        <p className="alert alert-danger p-2 mt-3 text-center">
          Write you task...
        </p>
      )}
      <form className="container mt-5" onSubmit={handleSumit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Escribe tu tarea..."
            name="title"
            onChange={handleChange}
            value={form}
            autoComplete="false"
            autoFocus={true}
          />
        </div>
        <button className="btn btn-outline-primary btn-block ">Guardar</button>
      </form>
    </>
  );
};

export default Form;
