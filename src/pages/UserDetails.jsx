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
        <main className="container py-5">
            <div className="card border-0 shadow-sm mx-auto" style={{ maxWidth: "720px" }}>
                <div className="card-body p-4 p-md-5">
                    <div className="d-flex align-items-center border-bottom pb-4 mb-4">
                        <img
                            src={user.profile_picture}
                            alt={`${user.first_name} ${user.last_name}`}
                            className="rounded-circle me-3"
                            width="96"
                            height="96"
                        />
                        <div>
                            <h1 className="h3 mb-1">
                                {user.first_name} {user.last_name}
                            </h1>
                            <p className="text-muted mb-0">{user.job}</p>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-6"><span className="fw-semibold">Email</span><br />{user.email}</div>
                        <div className="col-md-6"><span className="fw-semibold">Phone</span><br />{user.phone}</div>
                        <div className="col-md-6"><span className="fw-semibold">Gender</span><br />{user.gender}</div>
                        <div className="col-md-6"><span className="fw-semibold">Date of birth</span><br />{user.date_of_birth}</div>
                        <div className="col-md-6"><span className="fw-semibold">Address</span><br />{user.street}, {user.city}</div>
                        <div className="col-md-6"><span className="fw-semibold">Location</span><br />{user.state}, {user.country} {user.zipcode}</div>
                        <div className="col-md-6"><span className="fw-semibold">User ID</span><br />{user.id}</div>
                        <div className="col-md-6"><span className="fw-semibold">Coordinates</span><br />{user.latitude}, {user.longitude}</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UserDetails;
