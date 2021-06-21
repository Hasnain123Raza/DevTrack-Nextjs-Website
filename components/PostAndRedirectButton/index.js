import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import Resource from "../Resource";

function InitiateLoadingRequestButton({
  className,
  initiateLoadingRequest,
  text,
  variant,
}) {
  return (
    <Button
      className={className}
      variant={variant}
      onClick={initiateLoadingRequest}
    >
      {text}
    </Button>
  );
}

function LoadingButton({ className }) {
  return (
    <Button className={className} variant="secondary" disabled>
      Loading...
    </Button>
  );
}

export default function PostAndRedirectButton({
  className,
  initiateLoadingRequest,
  loadingRequestStatus,
  idleText = "Post",
  idleVariant = "success",
  redirectLink,
}) {
  const router = useRouter();

  if (loadingRequestStatus === "fulfilled") router.push(redirectLink);

  return (
    <Resource
      initiateAsync={initiateLoadingRequest}
      asyncStatus={loadingRequestStatus}
      idleComponent={() => (
        <InitiateLoadingRequestButton
          className={className}
          initiateLoadingRequest={initiateLoadingRequest}
          text={idleText}
          variant={idleVariant}
        />
      )}
      pendingComponent={() => <LoadingButton className={className} />}
      rejectedComponent={() => (
        <InitiateLoadingRequestButton
          className={className}
          initiateLoadingRequest={initiateLoadingRequest}
          text="Retry"
          variant="danger"
        />
      )}
      fulfilledComponent={() => <div></div>}
    />
  );
}
