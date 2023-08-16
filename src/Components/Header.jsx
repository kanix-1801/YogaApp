import React from "react";
import { Link } from "react-router-dom";
import Yoga from "../pages/Yoga";
import HomePage from "../pages/HomePage";
import Workout from "../pages/Workout";
import { Button, Stack } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <>
      <div className="container-fluid navBar">
        <Navbar className="navbar" expand="lg" variant="light">
          <div className="container-fluid">
            <Navbar.Brand className="logo" href="#">FitHit</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                <Link to="/">
                  <Button variant="outline-Dark" className="me-2">
                    Home
                  </Button>
                </Link>
                <Link to="/Yoga">
                  <Button variant="outline-Dark" className="me-2">
                    Yoga
                  </Button>
                </Link>
                {/* <Link to="/Workout">
                  <Button variant="outline-Dark" className="me-4">
                    Workout
                  </Button>
                </Link> */}
              </Nav>
            </Navbar.Collapse>
            {/* <Link to="/LoginPage">
              <Button className="login" variant="dark">
                Login
              </Button>
            </Link> */}
          </div>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
