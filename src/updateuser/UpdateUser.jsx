import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();
  const { id } = useParams(); // /edit/:id

  // Handle input
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch existing user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/api/users/${id}`
        );
        setUser(response.data); // adjust if backend returns { user }
      } catch (error) {
        toast.error("Failed to load user data");
      }
    };

    fetchUser();
  }, [id]);

  // Update user
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:7000/api/update/${id}`,
        user
      );

      toast.success(response.data.message || "User updated successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <>
      <h2>Update User</h2>

      <Link to="/">
        <button>Back</button>
      </Link>

      <form onSubmit={submitForm}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={inputHandler}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={inputHandler}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
          onChange={inputHandler}
          required
        />

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default UpdateUser;
