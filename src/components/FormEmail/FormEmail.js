import React from "react";
import {Form, Button} from "react-bootstrap";

const FormEmail = () => {
  
  return(
    <>
      <Form className="text-center">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
      </Form>
    </>
  )
}

export default FormEmail