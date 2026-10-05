import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
function Login() {
    let [mail, setMail] = useState("");
    let [pwd, setPwd] = useState("");
    const nav = useNavigate();

    function login() {
        let customer = {
            email: mail,
            pswd: pwd,
        };
        console.log(customer);
        if (customer.email == "" || customer.pswd == "") {
            alert("Fill the form first");
        } else {
            if (customer.email in localStorage) {
                let obj = JSON.parse(localStorage.getItem(customer.email));
                if (obj.email == customer.email && obj.pswd == customer.pswd) {
                    alert("Login Successfull");
                    localStorage.setItem("currUser", customer.email);
                    nav("/");
                    // window.location.href = "./index.html";
                } else {
                    alert("Incorrect Password");
                }
            } else {
                alert("User Not Found, Create an Account First");
            }
        }
    }
    useEffect(
        () => localStorage.setItem("currUser", ""),

        [],
    );

    return (
        <div className="">
            <Row className="p-5 mt-5">
                <Col></Col>
                <Col>
                    <h1 className="text-center">Login</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                placeholder="Enter email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={pwd}
                                onChange={(e) => setPwd(e.target.value)}
                                placeholder="Password"
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={login}>
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default Login;
