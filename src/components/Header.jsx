import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/logo.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Header() {
    const nav = useNavigate();
    const currUser = localStorage.getItem("currUser");
    let user = null;

    try {
        user = currUser
            ? JSON.parse(localStorage.getItem(currUser) || "null")
            : null;
    } catch {
        user = null;
    }

    let logout = () => {
        localStorage.setItem("currUser", "");
        nav("/login");
    };
    return (
        <Navbar className="bg-body-tertiary sticky-top">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    User Manager
                </Navbar.Brand>
                {!user ? (
                    <span>
                        <Button onClick={() => nav("/login")}>Login</Button>
                        <span className="px-2"></span>
                        <Button onClick={() => nav("/register")}>Register</Button>
                    </span>
                ) : (
                    <div>
                        <span className="p-3">
                            Welcome, {user.name || "User"}
                            {"  "}
                        </span>

                        <Button className="ml-5" onClick={logout}>
                            Logout
                        </Button>
                    </div>
                )}
            </Container>
        </Navbar>
    );
}

export default Header;
