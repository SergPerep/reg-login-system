import { useState } from "react";
import Input from "./Input";

const Login = props => {
    const { setAuth } = props;
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const { email, password } = inputs;
    const onSubmit = async e => {
        e.preventDefault();

        try {
            const body = { email, password };
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            const parsRes = await response.json();
            localStorage.setItem("token", parsRes.token);
            setAuth(true);
        } catch (error) {
            error.console(error.message);
        }
    }

    const handleInputChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
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
                <button className="btn btn-default">Login</button>
            </form>
        </>
    )
}

export default Login;