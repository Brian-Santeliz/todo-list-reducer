import React from "react";
import Form from "./components/Form";
import "./App.css";
const App = () => {
  //por hacer,
  /* 
    por hacer:
    Crear el reducer,
    crear el compoments list
    crear los items
    creat crear el compoments navbar y que mueste las tareas por hacer
    crear los metodos para los dispatch
    crear el initiState 
    probbar
  */
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
        <h3 className="text-white mt-2">Todo's App</h3>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="container mt-5 ">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex list">
                  <p className="">tarea descripcion</p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
                <li className="list-group-item d-flex list">
                  <p className="">tarea descripcion</p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
                <li className="list-group-item d-flex list">
                  <p className="">tarea descripcion</p>
                  <button className="btn btn-danger">Borrar</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5 ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
