import React, { Fragment } from "react";
import logo from "../logo.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Navbar, NavItem } from "react-bootstrap";

export default function Navigation({ title }) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            {title || "Scouting App"}
          </Navbar.Brand>
          {isAuthenticated && (
            <Fragment>
              <NavItem>
                <Button
                  id="qsLogoutBtn"
                  color="primary"
                  className="btn-margin"
                  // onClick={() => logout({ returnTo: window.location.origin })}
                >
                  Log out
                </Button>
              </NavItem>
            </Fragment>
          )}
          <NavItem>
            {!isAuthenticated && (
              <Fragment>
                <NavItem>
                  <Button
                    id="qsLogoutBtn"
                    color="primary"
                    className="btn-margin"
                    // onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log in
                  </Button>
                </NavItem>
              </Fragment>
            )}
          </NavItem>
        </Container>
      </Navbar>
    </div>
  );
}
