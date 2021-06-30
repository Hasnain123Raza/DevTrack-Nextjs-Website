import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
  AuthenticationStatus,
  selectAuthenticationStatus,
  selectUser,
} from "../../../../services/authenticatedSlice/selectors.js";

import { Container, Row, Col } from "react-bootstrap";
import EmailAlert from "./components/EmailAlert";
import DevTrackAccountCard from "./components/DevTrackAccountCard/index.js";
import ROBLOXAccountCard from "./components/ROBLOXAccountCard/index.js";
import DiscordAccountCard from "./components/DiscordAccountCard/index.js";
import TitledPage from "../../../../components/TitledPage";

export default function Dashboard() {
  const router = useRouter();

  const authenticationStatus = useSelector(selectAuthenticationStatus);

  useEffect(() => {
    if (authenticationStatus === AuthenticationStatus.Unauthenticated)
      router.push("/authentication/login");
  }, [authenticationStatus]);

  if (authenticationStatus === AuthenticationStatus.Authenticated) {
    const user = useSelector(selectUser);
    const { displayName } = user;

    return (
      <TitledPage
        className="account-dashboard"
        title={`Welcome ${displayName}`}
      >
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
  } else {
    return (
      <TitledPage
        className="account-dashboard"
        title={`Welcome ${displayName}`}
      ></TitledPage>
    );
  }
}
