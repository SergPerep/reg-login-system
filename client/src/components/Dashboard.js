import { useEffect, useState } from "react";
import Button from "./Button";

const Dashboard = props => {
    const { setAuth } = props;
    const [name, setName] = useState("");
    const getName = async() => {
        try {
            const response = await fetch("http://localhost:5000/dashboard", {
                headers: {
                    token : localStorage.getItem("token")
                }
            });

            const parseRes = await response.json();
            setName(parseRes.name);
        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(()=>{
        getName();
    }, []);

    const handleClickLogout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        setAuth(false);
    }
    return (
        <>
            <h1>Dashboard</h1>
            <p>Hello, {name}</p>
            <Button design="default" onClick={handleClickLogout}>Logout</Button>
        </>
    )
}

export default Dashboard;