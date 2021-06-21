import { useState } from "react";

import { Form, Button } from "react-bootstrap";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="authentication-register d-flex flex-column"
      style={{ flex: 1 }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Register</h2>
        <hr />

        <Form>
          <Form.Group controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              value={username}
              // isInvalid={Boolean(usernameError)}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {/* {usernameError} */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              // isInvalid={Boolean(emailError)}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {/* {emailError} */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              // isInvalid={Boolean(passwordError)}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {/* {passwordError} */}
            </Form.Control.Feedback>
          </Form.Group>
        </Form>

        <div className="mt-3 d-flex">
          <Button variant="success">Register</Button>
        </div>
      </div>
    </div>
  );
}
