import selectError from "../../../../../../services/utilities/selectError";
import recoverPasswordFormSchema from "./recoverPasswordFormSchema";

import { useState } from "react";
import useProcessForm from "../../../../../../services/hooks/useProcessForm";

import { Form } from "react-bootstrap";
import PostAndRepeatButton from "../../../../../../components/PostAndRepeatButton";
import TitledPage from "../../../../../../components/TitledPage";

export default function Login() {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState([]);
  const emailError = selectError(errors, ["email"]);

  const { initiate, status, response } = useProcessForm(
    { email },
    recoverPasswordFormSchema,
    "/api/authentication/password/recover",
    setErrors
  );

  return (
    <TitledPage className="password-recover" title="Recover Password">
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
      </Form>

      <div className="mt-3 d-flex">
        <PostAndRepeatButton
          initiateLoadingRequest={initiate}
          loadingRequestStatus={status}
          idleText="Send Recover Email"
          idleVariant="success"
        />
      </div>
    </TitledPage>
  );
}
