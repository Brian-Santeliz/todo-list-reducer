import React from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Nav from "./components/Nav";
import { ContextProvider } from "./components/contextTodo/context";
import { Container, Row, Col } from "reactstrap";
import "./App.css";

const App = () => {
  return (
    <ContextProvider>
      <>
        <Nav />
        <Container>
          <Row>
            <Col md={7}>
              <Container className="mt-5">
                <TodoList />
              </Container>
            </Col>
            <Col md={5}>
              <Form />
            </Col>
          </Row>
        </Container>
      </>
    </ContextProvider>
  );
};

export default App;
