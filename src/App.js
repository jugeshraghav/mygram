import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./frontend/pages/user/Login";
import { Signup } from "./frontend/pages/user/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
