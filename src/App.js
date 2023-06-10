import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./frontend/pages/user/Login";
import { Signup } from "./frontend/pages/user/Signup";

function App() {
  return (
    <div className="App">
      <h1>Hello From App</h1>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
