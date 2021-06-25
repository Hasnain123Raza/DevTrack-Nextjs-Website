import { HOST } from "../../../../services/constants";

import { useRouter } from "next/router";
import useApi from "../../../../services/hooks/useApi";

import PostAndRepeatButton from "../../../../components/PostAndRepeatButton";

export default function () {
  const {
    query: { slug },
  } = useRouter();

  const {
    initiate: initiateVerificationEmailRequest,
    status: verificationEmailRequestStatus,
    response: verificationEmailResponse,
  } = useApi(async () => {
    const response = await fetch(`${HOST}/api/verification/email`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    return data;
  });

  const token = Boolean(slug) && slug[0];

  return (
    <div className="verification-email d-flex flex-column" style={{ flex: 1 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Email Verification</h1>
        <hr />

        <p>
          To verify your email on this account, you will receive a verification
          email with further instructions.
        </p>

        <PostAndRepeatButton
          initiateLoadingRequest={initiateVerificationEmailRequest}
          loadingRequestStatus={verificationEmailRequestStatus}
          idleText="Send Verification Email"
          idleVariant="success"
        />
      </div>
    </div>
  );
}
