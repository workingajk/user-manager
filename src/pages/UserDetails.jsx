import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
    let { id } = useParams();
    console.log(id);
    let [user, setUser] = useState([]);
    const baseurl = `https://api.slingacademy.com/v1/sample-data/users/${id}`;
    const getUser = async () => {
        try {
            const res = await fetch(baseurl);
            const data = await res.json();
            console.log(data.user);

            setUser(data.user);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUser();
    }, []);
    return (
        <div>
            <pre>{JSON.stringify(user,null,2)}</pre>
            
        </div>
    );
}

export default UserDetails;
