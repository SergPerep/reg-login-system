import { useState } from "react";

const Register = props => {
    const { setAuth } = props;
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        name: ""
    });

    const { email, password, name } = inputs;
    const onChange = e => {
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
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange} />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange} />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={onChange} />
                <button className="btn btn-default">Submit</button>
            </form>
        </>
    )
}

export default Register;