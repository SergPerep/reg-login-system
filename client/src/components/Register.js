import { useState } from "react";
import Input from "./Input";

const Register = props => {
    const { setAuth } = props;
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { email, password, name } = inputs;
    const handleInputChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const body = { name, email, password };
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const parseRes = await response.json();
            // console.log(parseRes);
            localStorage.setItem("token", parseRes.token);
            setAuth(true);
        } catch (error) {
            error.console(error.message);
        }
    }
    return (
        <>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Anna"
                    value={name}
                    label="Name"
                    onChange={handleInputChange}
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={email}
                    label="Email"
                    onChange={handleInputChange}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="******"
                    label="Password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button className="btn btn-default">Submit</button>
            </form>
        </>
    )
}

export default Register;