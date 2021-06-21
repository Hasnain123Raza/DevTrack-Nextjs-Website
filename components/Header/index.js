import useWindowSize from "../../services/hooks/useWindowSize";
import Link from "next/link";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function MobileHeaderLinks() {
  return (
    <Nav className="ml-auto">
      <NavDropdown title="Menu">
        <Link href="/" passHref>
          <NavDropdown.Item>Home</NavDropdown.Item>
        </Link>
        <Link href="/browse" passHref>
          <NavDropdown.Item>Browse</NavDropdown.Item>
        </Link>
        <NavDropdown.Divider />
        <Link href="/authentication/login" passHref>
          <NavDropdown.Item>Login</NavDropdown.Item>
        </Link>
        <Link href="/authentication/register" passHref>
          <NavDropdown.Item>Register</NavDropdown.Item>
        </Link>
      </NavDropdown>
    </Nav>
  );
}

function NonMobileHeaderLinks() {
  return (
    <Nav style={{ flex: 1 }}>
      <Link href="/" passHref>
        <Nav.Link>Home</Nav.Link>
      </Link>
      <Link href="/browse" passHref>
        <Nav.Link>Browse</Nav.Link>
      </Link>

      <Link href="/authentication/login" passHref>
        <Nav.Link className="ml-auto">Login</Nav.Link>
      </Link>
      <Link href="/authentication/register" passHref>
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
