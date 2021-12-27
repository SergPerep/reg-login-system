
const Login = props => {
    const { setAuth } = props;
    return (
        <>
            <h1>Login</h1>
            <button onClick={()=> setAuth(true)}>Authenticate</button>
        </>
    )
}

export default Login;