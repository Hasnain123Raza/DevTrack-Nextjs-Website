import Link from "next/link";

import { Form, Button } from "react-bootstrap";

export default function Login() {
  return (
    <div
      className="authentication-login d-flex flex-column"
      style={{ flex: 1 }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <hr />

        <Form>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              // value={email}
              // isInvalid={Boolean(emailError)}
              // onChange={(event) => dispatch(setEmail(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              {/* {emailError} */}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              // value={password}
              // isInvalid={Boolean(passwordError)}
              // onChange={(event) => dispatch(setPassword(event.target.value))}
            />
            <Form.Control.Feedback type="invalid">
              {/* {passwordError} */}
            </Form.Control.Feedback>

            <Link href="/authentication/recoverpassword" passHref>
              <a className="text-muted text-decoration-none">
                <Form.Text>Forgot Password?</Form.Text>
              </a>
            </Link>
          </Form.Group>
        </Form>

        <div className="mt-3 d-flex">
          <Button variant="success">Login</Button>
        </div>
      </div>
    </div>
  );
}
