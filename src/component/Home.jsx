import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <nav>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
                {/* <Link to="/gettingdata"></Link> */}
            </nav>

            <h2>Home</h2>
        </div>
    );
}

export default Home;