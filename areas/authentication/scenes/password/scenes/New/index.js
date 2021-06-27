import selectError from "../../../../../../services/utilities/selectError";
import newPasswordFormSchema from "./newPasswordFormSchema";

import { useRouter } from "next/router";
import { useState } from "react";
import useProcessForm from "../../../../../../services/hooks/useProcessForm";

import { Form } from "react-bootstrap";
import PostAndRedirectButton from "../../../../../../components/PostAndRedirectButton";
import TitledPage from "../../../../../../components/TitledPage";

export default function New() {
  const router = useRouter();

  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState([]);
  const passwordError = selectError(errors, ["password"]);

  const { initiate, status, response } = useProcessForm(
    { token: router.query.token, password },
    newPasswordFormSchema,
    "/api/authentication/password/new",
    setErrors
  );

  return (
    <TitledPage className="password-new" title="New Password">
      <Form>
        <Form.Group controlId="password">
          <Form.Label>New Password</Form.Label>
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

      <div className="mt-3 d-flex">
        <PostAndRedirectButton
          initiateLoadingRequest={initiate}
          loadingRequestStatus={status}
          idleText="Set Password"
          idleVariant="success"
          redirectLink="/authentication/login"
        />
      </div>
    </TitledPage>
  );
}
