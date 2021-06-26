import { HOST } from "../../../../services/constants";

import { useRouter } from "next/router";
import { useEffect } from "react";
import useApi from "../../../../services/hooks/useApi";

import { Button } from "react-bootstrap";

export default function VerifyEmailToken({ token }) {
  const router = useRouter();

  const { initiate, status, response } = useApi(async () => {
    const response = await fetch(`${HOST}/api/verification/email/${token}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    return data;
  });

  useEffect(() => {
    initiate();
  }, []);

  if (status !== "idle" && status !== "pending") {
    const { success } = response;
    if (success) {
      return (
        <div
          className="verification-verify-email-token d-flex flex-column"
          style={{ flex: 1 }}
        >
          <div>
            <h1 style={{ textAlign: "center" }}>Email Verification</h1>
            <hr />

            <>
              <p>The email on this account has been successfully verified.</p>
              <Button
                variant="primary"
                onClick={() => router.push("/account/dashboard")}
              >
                Dashboard
              </Button>
            </>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="verification-verify-email-token d-flex flex-column"
          style={{ flex: 1 }}
        >
          <div>
            <h1 style={{ textAlign: "center" }}>Email Verification</h1>
            <hr />

            <>
              <p>
                There was a problem with this token and it can not be used for
                verification. You will need a new token.
              </p>
              <Button
                variant="primary"
                onClick={() => router.push("/verification/email")}
              >
                New Token
              </Button>
            </>
          </div>
        </div>
      );
    }
  } else {
    return <p>We are verifying your token, please wait...</p>;
  }
}
