import { useSelector } from "react-redux";

import { selectIsVerified } from "../../../../../../services/authenticatedSlice/selectors.js";

import { Alert } from "react-bootstrap";
import Link from "next/link";

export default function EmailAlert() {
  const isVerified = useSelector(selectIsVerified);

  return (
    <>
      {!isVerified && (
        <Alert variant="danger">
          <Alert.Heading>Action Required</Alert.Heading>
          <p>
            Your email is unverified. To verify your email please go{" "}
            <Link href="/verification/email" passHref>
              <Alert.Link>here</Alert.Link>
            </Link>
            .
          </p>
        </Alert>
      )}
    </>
  );
}
