import { useSelector } from "react-redux";

import {
  selectUser,
  selectIsVerified,
} from "../../../../../../services/authenticatedSlice/selectors.js";

import { Card, Badge } from "react-bootstrap";

function getFormattedEmail(email) {
  const splitted = email.split("@");
  const firstPart = splitted[0].substring(0, 3);
  const secondPart = splitted[1];
  return firstPart + "***@" + secondPart;
}

export default function DevTrackAccountCard() {
  const { displayName, email, role } = useSelector(selectUser);
  const isVerified = useSelector(selectIsVerified);

  return (
    <Card>
      <Card.Body>
        <h4>DevTrack Account</h4>
        <b>Display Name: </b> {displayName}
        <br />
        <b>Email: </b> {getFormattedEmail(email)}{" "}
        {!isVerified ? (
          <Badge variant="danger">Unverified</Badge>
        ) : (
          <Badge variant="success">Verified</Badge>
        )}
        <br />
        <b>Role: </b> {role}
      </Card.Body>
    </Card>
  );
}
