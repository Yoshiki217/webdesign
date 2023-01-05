import HomePage from "./comp/HomePage";
import Login from "./comp/Login";
import { BrowserRouter } from "react-router-dom";
import Router from "./comp/router/Router";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Route path="/" element={<HomePage/>}>
            <Route path='login' element={<Login/>} /> 
          </Route>
          
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
