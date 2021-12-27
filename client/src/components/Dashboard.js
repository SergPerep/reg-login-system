
const Dashboard = props => {
    const { setAuth } = props;
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={()=>setAuth(false)}>Logout</button>
        </>
    )
}

export default Dashboard;