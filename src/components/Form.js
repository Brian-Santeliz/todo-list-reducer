import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Alert, Container } from "reactstrap";
import { useCustomContext } from "../components/contextTodo/context";

const FormTodo = () => {
  const [form, setForm] = useState("");
  const [error, setError] = useState(false);
  const { ADD_TASK } = useCustomContext();

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
        <Alert color="danger" className="p-2 mt-5 text-center">
          Write you task...
        </Alert>
      )}
      <Container>
        <Form className="mt-5" onSubmit={handleSumit}>
          <FormGroup>
            <Input
              type="text"
              placeholder="Add a task..."
              name="title"
              onChange={handleChange}
              value={form}
              autoComplete="false"
              autoFocus={true}
            />
          </FormGroup>
          <Button color="outline-primary" className="btn-block">
            Save
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default FormTodo;
