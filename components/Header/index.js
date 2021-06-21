import useWindowSize from "../../services/hooks/useWindowSize";
import Link from "next/link";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function MobileHeaderLinks() {
  return (
    <Nav className="ml-auto">
      <NavDropdown title="Menu">
        <Link href="/">
          <NavDropdown.Item>Home</NavDropdown.Item>
        </Link>
        <Link href="/browse">
          <NavDropdown.Item>Browse</NavDropdown.Item>
        </Link>
        <NavDropdown.Divider />
        <Link href="/authentication/login">
          <NavDropdown.Item>Login</NavDropdown.Item>
        </Link>
        <Link href="/authentication/register">
          <NavDropdown.Item>Register</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </Nav>
  );
}

function NonMobileHeaderLinks() {
  return (
    <Nav style={{ flex: 1 }}>
      <Link href="/">
        <Nav.Link>Home</Nav.Link>
      </Link>
      <Link href="/browse">
        <Nav.Link>Browse</Nav.Link>
      </Link>

      <Link href="/authentication/login">
        <Nav.Link className="ml-auto">Login</Nav.Link>
      </Link>
      <Link href="/authentication/register">
        <Nav.Link>Register</Nav.Link>
      </Link>
    </Nav>
  );
}

export default function Header() {
  const { width } = useWindowSize();

  return (
    <div className="header">
      <Navbar variant="dark" bg="dark">
        <Navbar.Brand>DevTrack</Navbar.Brand>
        {width < 576 ? <MobileHeaderLinks /> : <NonMobileHeaderLinks />}
      </Navbar>
    </div>
  );
}
