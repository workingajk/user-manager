import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

function Register() {
    let [user, setUser] = useState("");
    let [mail, setMail] = useState("");
    let [pwd, setPwd] = useState("");
    const nav = useNavigate();
    useEffect(
        () => localStorage.setItem("currUser", ""),

        [],
    );

    function register() {
        let customer = {
            name: user,
            email: mail,
            pswd: pwd,
            balance: 0,
            transactions: [],
        };
        console.log(customer);
        if (
            customer.name == "" ||
            customer.email == "" ||
            customer.pswd == ""
        ) {
            alert("Fill the form first");
        } else {
            if (customer.email in localStorage) {
                alert("Account already exists");
            } else {
                localStorage.setItem(customer.email, JSON.stringify(customer));
                alert("Registered Successfully");
                nav("/");
                // window.location.href = "./";
            }
        }
    }

    return (
        <>
            <Row>
                <Col></Col>
                <Col>
                    <h1 className="text-center">Register</h1>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                placeholder="Enter Full Name"
                            />
                        </Form.Group>

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
                        <Button variant="primary" onClick={register}>
                            Register
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
        </>
    );
}

export default Register;
