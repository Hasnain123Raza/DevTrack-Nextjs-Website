import { useSelector } from "react-redux";

import { selectUser } from "../../../../services/authenticatedSlice/selectors.js";

import { Container, Row, Col } from "react-bootstrap";
import EmailAlert from "./components/EmailAlert";
import DevTrackAccountCard from "./components/DevTrackAccountCard/index.js";
import ROBLOXAccountCard from "./components/ROBLOXAccountCard/index.js";
import DiscordAccountCard from "./components/DiscordAccountCard/index.js";
import TitledPage from "../../../../components/TitledPage";

export default function Dashboard() {
  const user = useSelector(selectUser);
  const { displayName } = user;

  return (
    <TitledPage className="account-dashboard" title={`Welcome ${displayName}`}>
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
    </TitledPage>
  );
}
