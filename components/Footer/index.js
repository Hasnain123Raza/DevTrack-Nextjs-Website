import { Container, Row, Col } from "react-bootstrap";

import styles from "../../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles.footer} bg-dark p-3`}>
      <Container fluid>
        {/* Columns have extra divs to hold link items so that the link items don't span the entire width of the column. */}
        <Row style={{ textAlign: "center" }}>
          <Col md>
            <h5>DevTrack</h5>
            <div className="d-flex flex-column">
              <div>
                <a className="px-2" href="#">
                  Contact us
                </a>
              </div>
              <div>
                <a href="#">Privacy Policy</a>
              </div>
              <div>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </Col>
          <Col md>
            <h5>HELP</h5>
            <div className="d-flex flex-column">
              <div>
                <a href="#">FAQ</a>
              </div>
            </div>
          </Col>
        </Row>

        <hr />

        <small>
          This website is currently under development, please report any bugs
          you find through contact.
        </small>
      </Container>
    </div>
  );
}
