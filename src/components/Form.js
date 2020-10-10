import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    setForm(e.target.value);
  };
  const handleSumit = (e) => {
    e.preventDefault();
    if (form.trim().length <= 0) {
      console.log("error");
      return;
    }
    console.log("agegador");
    setForm("");
    //enviar la peticion al dispatch en el payload debe ir la tarea
  };
  return (
    <>
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
