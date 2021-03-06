import React from "react";
import { useCustomContext } from "../components/contextTodo/context";
import { Navbar } from "reactstrap";
const Nav = () => {
  const { state } = useCustomContext();
  return (
    <Navbar className="bg-primary p-2 d-flex justify-content-center">
      <h3 className="text-white mt-2 text-center header">
        Todo's App! ({state.filter((todo) => !todo.complete).length} task to do)
      </h3>
    </Navbar>
  );
};
export default Nav;
