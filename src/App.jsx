import "./App.css";
import User from "./getuser/User";
import AddUser from "./adduser/AddUser";
import { Routes, Route } from "react-router-dom";
import UpdateUser from "./updateuser/UpdateUser";

function App() {
  return (
    <div className="App">
      <h1 className="py-10">MERN-CRUD</h1>

      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<AddUser />} />
         <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
