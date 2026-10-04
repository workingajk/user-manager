import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Pnf from "./pages/Pnf";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/details/:id" element={<UserDetails />} />
                <Route path="/*" element={<Pnf />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
