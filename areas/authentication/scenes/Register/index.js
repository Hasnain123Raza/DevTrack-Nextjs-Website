import selectError from "../../../../services/utilities/selectError";
import registerFormSchema from "./services/registerFormSchema";
import { SITE_KEY } from "../../../../services/constants";

import { useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import useProcessForm from "../../../../services/hooks/useProcessForm";

import { setAuthentication } from "../../../../services/authenticatedSlice";

import { Form } from "react-bootstrap";
import PostAndRedirectButton from "../../../../components/PostAndRedirectButton";
import Reaptcha from "reaptcha";

export default function Register() {
  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reCaptchaToken, setReCaptchaToken] = useState("");

  const [errors, setErrors] = useState([]);
  const displayNameError = selectError(errors, ["user", "displayName"]);
  const emailError = selectError(errors, ["user", "email"]);
  const passwordError = selectError(errors, ["user", "password"]);
  const reCaptchaTokenError = selectError(errors, ["reCaptcha"]);

  const reCaptchaRef = useRef(null);

  const { initiate, status, response } = useProcessForm(
    { user: { displayName, email, password }, reCaptchaToken },
    registerFormSchema,
    "/api/authentication/register",
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
      className="authentication-register d-flex flex-column"
      style={{ flex: 1 }}
    >
      <div>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <hr />

        <Form>
          <Form.Group controlId="displayName">
            <Form.Label>Display Name</Form.Label>
            <Form.Control
              type="text"
              value={displayName}
              isInvalid={Boolean(displayNameError)}
              onChange={(event) => setDisplayName(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              {displayNameError}
            </Form.Control.Feedback>
          </Form.Group>

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
            idleText="Register"
            redirectLink={"/account/dashboard"}
          />
        </div>
      </div>
    </div>
  );
}
