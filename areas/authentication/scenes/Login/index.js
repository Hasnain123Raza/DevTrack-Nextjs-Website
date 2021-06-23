import selectError from "../../../../services/utilities/selectError";
import loginFormSchema from "./services/loginFormSchema";
import { SITE_KEY } from "../../../../services/constants";

import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import useProcessForm from "../../../../services/hooks/useProcessForm";
import Link from "next/link";

import { setAuthentication } from "../../../../services/authenticatedSlice";

import { Form } from "react-bootstrap";
import PostAndRedirectButton from "../../../../components/PostAndRedirectButton";
import Reaptcha from "reaptcha";

export default function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const [errors, setErrors] = useState([]);
  const emailError = selectError(errors, ["user", "email"]);
  const passwordError = selectError(errors, ["user", "password"]);
  const reCaptchaTokenError = selectError(errors, ["reCaptcha"]);

  const reCaptchaRef = useRef(null);

  const { initiate, status, response } = useProcessForm(
    { user: { email, password }, reCaptchaToken },
    loginFormSchema,
    "/api/authentication/login",
    setErrors
  );

  useEffect(() => {
    if (status === "fulfilled") {
      const { authenticated: isAuthenticated, user } = response.payload;
      dispatch(setAuthentication({ isAuthenticated, user }));
    }
    if (status === "rejected") {
      reCaptchaRef.current.reset();
    }
  }, [status]);

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

        <Reaptcha
          sitekey={SITE_KEY}
          onVerify={(token) => setReCaptchaToken(token)}
          ref={reCaptchaRef}
        />

        <div className="invalid-feedback" style={{ display: "block" }}>
          {reCaptchaTokenError}
        </div>

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
