import React, { useContext } from "react";
import Context from "../components/contextTodo/context";
import { Navbar } from "reactstrap";
const Nav = () => {
  const { state } = useContext(Context);
  return (
    <Navbar className="bg-primary p-2 d-flex justify-content-center">
      <h3 className="text-white mt-2 text-center">
        Todo's App! ({state.filter((todo) => !todo.complete).length} task to do)
      </h3>
    </Navbar>
  );
};
export default Nav;
