import HomePage from "../HomePage"
import Login from "../Login"
import { Routes, Route} from "react-router-dom";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={HomePage} />
            <Route path="/login" element={Login} />
            
            
            
        </Routes>
    )
}

export default Router