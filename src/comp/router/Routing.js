import {
    BrowserRouter as Router,
    Routes,
    Route,
    } from "react-router-dom";
import HomePage from "../HomePage";
import Login from "../Login";
import Operation from "../Operation";

const Routing = () => {
    return (

        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/operation" element={<Operation />} />
            </Routes>
        </Router>
        
    )
}

export default Routing