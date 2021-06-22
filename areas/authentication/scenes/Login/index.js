import selectError from "../../../../services/utilities/selectError";
import loginFormSchema from "./services/loginFormSchema.js";

import { useState } from "react";
import useProcessForm from "../../../../services/hooks/useProcessForm";
import Link from "next/link";

import { Form } from "react-bootstrap";
import PostAndRedirectButton from "../../../../components/PostAndRedirectButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const emailError = selectError(errors, ["user", "email"]);
  const passwordError = selectError(errors, ["user", "password"]);

  const { initiate, status, response } = useProcessForm(
    { user: { email, password } },
    loginFormSchema,
    "/api/authentication/login",
    setErrors
  );

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
              value={email}
              isInvalid={Boolean(emailError)}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {emailError}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              isInvalid={Boolean(passwordError)}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {passwordError}
            </Form.Control.Feedback>

            <Link href="/authentication/recoverpassword" passHref>
              <a className="text-muted text-decoration-none">
                <Form.Text>Forgot Password?</Form.Text>
              </a>
            </Link>
          </Form.Group>
        </Form>

        <div className="mt-3 d-flex">
          <PostAndRedirectButton
            initiateLoadingRequest={initiate}
            loadingRequestStatus={status}
            idleText="Login"
            redirectLink={"/"}
          />
        </div>
      </div>
    </div>
  );
}
