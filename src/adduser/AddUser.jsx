import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast"
function AddUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post("http://13.235.67.215:4000/api/user", user);

    toast.success(response.data.message || "User created successfully!", {
      position: "top-right",
    });
      
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add User</h2>

      <Link to="/">
        <button>Back</button>
      </Link>

      <form onSubmit={submitForm}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={inputHandler}
            required
            placeholder="Enter your Name"
          />

          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={inputHandler}
            required
            placeholder="Enter your Email"
          />

          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={inputHandler}
            required
            placeholder="Enter your Address"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default AddUser;
