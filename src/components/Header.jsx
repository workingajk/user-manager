import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./../assets/logo.svg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Header() {
    const nav = useNavigate();
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
                {localStorage.getItem("currUser") == "" ? (
                    ""
                ) : (
                    <div>
                      <span className="p-3">
                        Welcome,{" "}
                        {
                          JSON.parse(
                            localStorage.getItem(
                                    localStorage.getItem("currUser"),
                                ),
                              ).name
                        }{"  "}
                              </span>
                        
                        <Button className="ml-5" onClick={logout}>Logout</Button>

                    </div>
                )}
            </Container>
        </Navbar>
    );
}

export default Header;
