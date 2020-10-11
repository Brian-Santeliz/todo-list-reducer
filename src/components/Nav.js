import React from "react";

const Nav = ({ state }) => {
  return (
    <nav className="navbar navbar-dark bg-primary d-flex justify-content-center">
      <h3 className="text-white mt-2">
        Todo's App ({state.filter((todo) => !todo.complete).length} task to do)
      </h3>
    </nav>
  );
};
export default Nav;
