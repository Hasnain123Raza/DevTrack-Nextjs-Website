import Link from "next/link";

import { useSelector } from "react-redux";

import {
  selectIsAuthenticated,
  selectUser,
} from "../../../../services/authenticatedSlice/selectors.js";

import {
  Alert,
  Badge,
  Button,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function getFormattedEmail(email) {
  const splitted = email.split("@");
  const firstPart = splitted[0].substring(0, 3);
  const secondPart = splitted[1];
  return firstPart + "***@" + secondPart;
}

export default function Dashboard() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const { displayName, email, role } = user;
  const isVerified = role !== "unverified";

  return (
    <div className="account-dashboard d-flex flex-column" style={{ flex: 1 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome {displayName}!</h1>
        <hr />
        {!isVerified && (
          <Alert variant="danger">
            <Alert.Heading>Action Required</Alert.Heading>
            <p>
              Your email is unverified. To verify your email please go{" "}
              <Alert.Link>here</Alert.Link>.
            </p>
          </Alert>
        )}
        <Card className="mb-3">
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
        <Container className={!isVerified && "text-muted"}>
          <Row>
            <Col className="p-0" sm>
              <Card>
                <Card.Body>
                  <h4>ROBLOX Account</h4>
                  To link your ROBLOX account, please follow the procedure{" "}
                  {!isVerified ? (
                    "here"
                  ) : (
                    <Link href="" passHref>
                      <a className="text-decoration-none">here</a>
                    </Link>
                  )}
                  .
                  {/* <b>ID: </b> 3213123543567
                  <br />
                  <b>Username: </b> RazaTD
                  <br />
                  <Button className="mt-2" variant="danger">
                    Remove
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col className="p-0" sm>
              <Card>
                <Card.Body>
                  <h4>Discord Account</h4>
                  To link your Discord account, please follow the procedure{" "}
                  {!isVerified ? (
                    "here"
                  ) : (
                    <Link href="" passHref>
                      <a className="text-decoration-none">here</a>
                    </Link>
                  )}
                  .
                  {/* <b>ID: </b> 3213123543567
                  <br />
                  <b>Username: </b> RazaTD
                  <br />
                  <Button className="mt-2" variant="danger">
                    Remove
                  </Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
