// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBkhZ53e5UVJrfxj8BgCZQ2W0LYareB_PM",
//     authDomain: "chat-bot-aa3b0.firebaseapp.com",
//     projectId: "chat-bot-aa3b0",
//     storageBucket: "chat-bot-aa3b0.firebasestorage.app",
//     messagingSenderId: "493309518368",
//     appId: "1:493309518368:web:d00332ff3fa2488bb11245",
//     measurementId: "G-FXKD0HX4SN"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);





// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBkhZ53e5UVJrfxj8BgCZQ2W0LYareB_PM",
    authDomain: "chat-bot-aa3b0.firebaseapp.com",
    projectId: "chat-bot-aa3b0",
    storageBucket: "chat-bot-aa3b0.firebasestorage.app",
    messagingSenderId: "493309518368",
    appId: "1:493309518368:web:d00332ff3fa2488bb11245",
    measurementId: "G-FXKD0HX4SN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
