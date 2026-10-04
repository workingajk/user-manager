import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <ul>
                {users.map((user) => (
                    <li><Link to={`/details/${user.id}`}> {user.job}</Link></li>
                ))}
            </ul>
        </>
    );
}

export default Dashboard;
