import Resource from "../Resource";
import { Card, Button } from "react-bootstrap";

function PendingCard() {
  return (
    <Card>
      <Card.Body>
        <h5>Please Wait</h5>
        <hr />
        We are loading some resources
        <br />
        <Button className="w-100 mt-3" variant="secondary" disabled>
          Loading...
        </Button>
      </Card.Body>
    </Card>
  );
}

function RejectedCard({ initiateAsync: initiateLoadingRequest }) {
  return (
    <Card>
      <Card.Body>
        <h5>Uh Oh</h5>
        <hr />
        We were unable to load some resources
        <br />
        <Button
          className="w-100 mt-3"
          variant="danger"
          onClick={initiateLoadingRequest}
        >
          Retry
        </Button>
      </Card.Body>
    </Card>
  );
}

export default function GetRequestCard({
  initiateLoadingRequest,
  loadingRequestStatus,
  fulfilledComponent,
}) {
  return (
    <Resource
      initiateAsync={initiateLoadingRequest}
      asyncStatus={loadingRequestStatus}
      idleComponent={PendingCard}
      pendingComponent={PendingCard}
      rejectedComponent={RejectedCard}
      fulfilledComponent={fulfilledComponent}
    />
  );
}
