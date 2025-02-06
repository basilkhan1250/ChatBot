import { auth } from "../firebaseConfig";

function Logout() {

    async function handleClick() {
        try {
            await auth.signOut();
            window.location.href = "/";
            console.log("Logout Successful!");
        }
        catch (error) {
            console.error(error.message);
            console.log("Error Logging Out", error.message);
        }
    }

    return (
        <div>
            <h2>Logout</h2>
            <button onClick={handleClick} >Logout</button>
        </div>
    );
}


export default Logout;  