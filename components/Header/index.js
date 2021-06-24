import Link from "next/link";

import useWindowSize from "../../services/hooks/useWindowSize";
import { useSelector } from "react-redux";

import {
  selectIsAuthenticated,
  selectGetAuthenticatedRequestStatus,
} from "../../services/authenticatedSlice/selectors";

import { Navbar, Nav, DropdownButton, Dropdown } from "react-bootstrap";

function MobileHeaderLinks() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const getAuthenticatedRequestStatus = useSelector(
    selectGetAuthenticatedRequestStatus
  );

  return (
    <Nav className="ml-auto">
      <DropdownButton variant="secondary" title="Menu" menuAlign="right">
        <Link href="/" passHref>
          <Dropdown.Item>Home</Dropdown.Item>
        </Link>
        <Link href="/browse" passHref>
          <Dropdown.Item>Browse</Dropdown.Item>
        </Link>
        <Dropdown.Divider />
        {getAuthenticatedRequestStatus === "fulfilled" &&
          (isAuthenticated ? (
            <>
              <Link href="/account/profile" passHref>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>
              <Link href="/account/dashboard" passHref>
                <Dropdown.Item>Dashboard</Dropdown.Item>
              </Link>
            </>
          ) : (
            <>
              <Link href="/authentication/login" passHref>
                <Dropdown.Item>Login</Dropdown.Item>
              </Link>
              <Link href="/authentication/register" passHref>
                <Dropdown.Item>Register</Dropdown.Item>
              </Link>
            </>
          ))}
      </DropdownButton>
    </Nav>
  );
}

function NonMobileHeaderLinks() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const getAuthenticatedRequestStatus = useSelector(
    selectGetAuthenticatedRequestStatus
  );

  return (
    <Nav style={{ flex: 1 }}>
      <Link href="/" passHref>
        <Nav.Link>Home</Nav.Link>
      </Link>
      <Link href="/browse" passHref>
        <Nav.Link>Browse</Nav.Link>
      </Link>

      {getAuthenticatedRequestStatus === "fulfilled" &&
        (isAuthenticated ? (
          <>
            <Link href="/account/profile" passHref>
              <Nav.Link className="ml-auto">Profile</Nav.Link>
            </Link>
            <Link href="/account/dashboard" passHref>
              <Nav.Link>Dashboard</Nav.Link>
            </Link>
          </>
        ) : (
          <>
            <Link href="/authentication/login" passHref>
              <Nav.Link className="ml-auto">Login</Nav.Link>
            </Link>
            <Link href="/authentication/register" passHref>
              <Nav.Link>Register</Nav.Link>
            </Link>
          </>
        ))}
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
