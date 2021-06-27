import { HOST } from "../../../../services/constants";

import useApi from "../../../../services/hooks/useApi";

import PostAndRepeatButton from "../../../../components/PostAndRepeatButton";
import TitledPage from "../../../../components/TitledPage";

export default function RequestEmailToken() {
  const { initiate, status, response } = useApi(async () => {
    const response = await fetch(`${HOST}/api/verification/email`, {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();
    return data;
  });

  return (
    <TitledPage
      className="verification-request-email-token"
      title="Email Verification"
    >
      <p>
        To verify your email on this account, you will receive a verification
        email with further instructions.
      </p>
      <PostAndRepeatButton
        initiateLoadingRequest={initiate}
        loadingRequestStatus={status}
        idleText="Send Verification Email"
        idleVariant="success"
      />
    </TitledPage>
  );
}
