import React from 'react';
import { auth } from '../firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

function SignInWithGoogle() {

    const handleSignInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(async (result) => {
            const user = result.user;
            console.log(user);
            if (user) {
                toast.success("Sign In With Google Successful!", {
                    position: "top-center"
                });
                window.location.href = "/gettingdata";
            }
        })
    };

    return (
        <div>
            <h2>Sign In With Google</h2>
            <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
        </div>
    );
}

export default SignInWithGoogle;
