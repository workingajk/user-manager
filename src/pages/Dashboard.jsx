import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row, Container } from "react-bootstrap";

function Dashboard() {
    const baseurl = "https://api.slingacademy.com/v1/sample-data/users";
    let [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch(baseurl);
            const data = await res.json();
            console.log(data.users);
            setUsers(data.users);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <>
            <Container>
                <Row className="g-4 p-4">

                {users.map((user) => (
                    <Col>
                        <Card style={{ width: "15rem", height:"100%"  }}>
                            <Card.Img
                                variant="top"
                                src={user.profile_picture}
                                style={{ height: "250px", objectFit: "cover" }}
                            />
                            <Card.Body>
                                <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
                                <Card.Text>
                                    {user.job}
                                </Card.Text>
                        <Link to={`/details/${user.id}`}>            
                                <Button variant="primary">View Profile</Button>
                        </Link>
                            </Card.Body>
                        </Card>
                    </Col>


))}
</Row>
            </Container>
        </>
    );
}

export default Dashboard;
