import { useSelector } from "react-redux";

import { selectUser } from "../../../../services/authenticatedSlice/selectors.js";

import { Container, Row, Col } from "react-bootstrap";
import EmailAlert from "./components/EmailAlert";
import DevTrackAccountCard from "./components/DevTrackAccountCard/index.js";
import ROBLOXAccountCard from "./components/ROBLOXAccountCard/index.js";
import DiscordAccountCard from "./components/DiscordAccountCard/index.js";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const { displayName } = user;

  return (
    <div className="account-dashboard d-flex flex-column" style={{ flex: 1 }}>
      <div>
        <h1 style={{ textAlign: "center" }}>Welcome {displayName}!</h1>
        <hr />
        <EmailAlert />
        <DevTrackAccountCard />

        <Container className="mt-3">
          <Row>
            <Col className="p-0" sm>
              <ROBLOXAccountCard />
            </Col>
            <Col className="p-0" sm>
              <DiscordAccountCard />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
