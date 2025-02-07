import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import SignInWithGoogle from "./SignInWithGoogle";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 

    const handleSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup Successful!");
            navigate("/login");
            console.log(email, password);
        } catch (error) {
            alert(error.message);
            console.log(email, password);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign Up</button>
            <SignInWithGoogle />
        </div>
    );
}

export default Signup;
