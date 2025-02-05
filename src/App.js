import './App.css';
import Gettingdata from './component/Gettingdata';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/LogIn";
import Home from './component/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gettingdata" element={<Gettingdata />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
