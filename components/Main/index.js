import { Container } from "react-bootstrap";

export default function Main({ children }) {
  return (
    <div className="main d-flex flex-column" style={{ flex: 1 }}>
      <Container className="my-3 d-flex flex-column" style={{ flex: 1 }}>
        {children}
      </Container>
    </div>
  );
}
