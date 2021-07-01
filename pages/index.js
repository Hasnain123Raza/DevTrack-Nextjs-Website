import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import DevTrackLogo from "../public/DevTrack.png";

export default function Home() {
  return (
    <div className="home d-flex flex-column" style={{ flex: 1 }}>
      <Jumbotron>
        <Container>
          <Row>
            <Col className="d-flex" sm>
              <div className="mx-auto">
                <Image
                  src={DevTrackLogo}
                  alt="DevTrack Logo"
                  layout="intrinsic"
                  width="300"
                  height="300"
                />
              </div>
            </Col>
            <Col sm>
              <h1>
                <b>Track</b>, <b>Level up</b>, and <b>Compete</b> with DevTrack!
              </h1>
              <big>
                <p>
                  With DevTrack, you can track your time spent in ROBLOX Studio
                  and level up to compete with others.
                </p>
                <p>Sign up for free or browse top competitors!</p>
              </big>
              <Button variant="success" size="lg">
                Sign Up
              </Button>
              <Button className="ml-3" variant="outline-primary" size="lg">
                Browse
              </Button>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron>
        <Container>
          <Row>
            <Col sm>
              <h1>
                <b>Track</b>
              </h1>
              <big>
                <p>
                  Use the DevTrack ROBLOX plugin to automatically track the time
                  you spend in ROBLOX Studio. This data will be stored in your
                  DevTrack profile.
                </p>
                <p className="mt-auto">
                  <small>
                    You can turn off online data collection, however, this will
                    disable certain features. <Link href="">Learn more...</Link>
                  </small>
                </p>
              </big>
            </Col>
            <Col className="d-flex" sm>
              <div className="mx-auto">
                <Image
                  src={DevTrackLogo}
                  alt="DevTrack Logo"
                  layout="intrinsic"
                  width="200"
                  height="200"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron>
        <Container>
          <Row>
            <Col sm>
              <h1>
                <b>Level up</b>
              </h1>
              <big>
                <p>
                  Let your friends know how awesome you are by leveling up and
                  being productive in ROBLOX Studio!
                </p>
              </big>
            </Col>
            <Col className="d-flex" sm>
              <div className="mx-auto">
                <Image
                  src={DevTrackLogo}
                  alt="DevTrack Logo"
                  layout="intrinsic"
                  width="200"
                  height="200"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Jumbotron>
        <Container>
          <Row>
            <Col sm>
              <h1>
                <b>Compete</b>
              </h1>
              <big>
                <p>
                  Take the challenge to become the number one and compete with
                  everyone!
                </p>
              </big>
            </Col>
            <Col className="d-flex" sm>
              <div className="mx-auto">
                <Image
                  src={DevTrackLogo}
                  alt="DevTrack Logo"
                  layout="intrinsic"
                  width="200"
                  height="200"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
}
