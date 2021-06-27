import { HOST } from "../../../../services/constants";

import { useRouter } from "next/router";
import { useEffect } from "react";
import useApi from "../../../../services/hooks/useApi";
import { useSelector } from "react-redux";

import {
  AuthenticationStatus,
  selectAuthenticationStatus,
} from "../../../../services/authenticatedSlice/selectors";

import { Button } from "react-bootstrap";
import TitledPage from "../../../../components/TitledPage";

export default function VerifyEmailToken() {
  const router = useRouter();
  const { token } = router.query;

  const { initiate, status, response } = useApi(async () => {
    const response = await fetch(
      `${HOST}/api/verification/email/${Boolean(token) ? token : "Default"}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await response.json();

    return data;
  });

  useEffect(() => {
    if (Boolean(token)) initiate();
  }, [router.query]);

  const authenticationStatus = useSelector(selectAuthenticationStatus);

  if (status === "idle" || status === "pending") {
    return (
      <TitledPage
        className="verification-verify-email-token"
        title="Email Verification"
      >
        <p>Please wait your token is being verified.</p>
      </TitledPage>
    );
  } else {
    const { success, payload } = response;
    if (success) {
      return (
        <TitledPage
          className="verification-verify-email-token"
          title="Email Verification"
        >
          <p>The email on this account has been successfully verified.</p>

          {authenticationStatus === AuthenticationStatus.Authenticated ? (
            <Button
              variant="primary"
              onClick={() => router.push("/account/dashboard")}
            >
              Dashboard
            </Button>
          ) : (
            authenticationStatus === AuthenticationStatus.Unauthenticated && (
              <Button
                variant="primary"
                onClick={() => router.push("/authentication/login")}
              >
                Login
              </Button>
            )
          )}
        </TitledPage>
      );
    } else {
      return (
        <TitledPage
          className="verification-verify-email-token"
          title="Email Verification"
        >
          {Boolean(payload) && Boolean(payload.alreadyVerified) ? (
            <>
              <p>
                The email on this account is already verified. The token is now
                invalid.
              </p>
              {authenticationStatus === AuthenticationStatus.Authenticated ? (
                <Button
                  variant="primary"
                  onClick={() => router.push("/account/dashboard")}
                >
                  Dashboard
                </Button>
              ) : (
                authenticationStatus ===
                  AuthenticationStatus.Unauthenticated && (
                  <Button
                    variant="primary"
                    onClick={() => router.push("/authentication/login")}
                  >
                    Login
                  </Button>
                )
              )}
            </>
          ) : (
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
          )}
        </TitledPage>
      );
    }
  }
}
