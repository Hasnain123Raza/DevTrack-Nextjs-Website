import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAuthenticated } from "../../services/authenticatedSlice";
import { selectGetAuthenticatedRequestStatus } from "../../services/authenticatedSlice/selectors";

import { Container } from "react-bootstrap";
import ActionCard from "../ActionCard";
import AlertSystem from "../AlertSystem";

export default function Main({ children }) {
  const dispatch = useDispatch();
  const getAuthenticatedRequestStatus = useSelector(
    selectGetAuthenticatedRequestStatus
  );

  useEffect(() => {
    dispatch(getAuthenticated());
  }, []);

  return (
    <div className="main d-flex flex-column" style={{ flex: 1 }}>
      <Container className="my-3 d-flex flex-column" style={{ flex: 1 }}>
        {getAuthenticatedRequestStatus !== "rejected" ? (
          <>
            <AlertSystem />
            {children}
          </>
        ) : (
          <ActionCard
            initiateAction={() => dispatch(getAuthenticated())}
            title="Uh oh"
            description="We were unable to load some important resources from the server"
            buttonText="Retry"
            buttonVariant="danger"
          />
        )}
      </Container>
    </div>
  );
}
