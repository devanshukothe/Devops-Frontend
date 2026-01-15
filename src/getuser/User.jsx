import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const User = () => {

   const [users, setUsers] = useState([]);
   useEffect(()=> {
      const fetchData = async() =>{
         try {
            const respone = await axios.get("http://13.235.67.215:4000/api/users");
            setUsers(respone.data)
         } catch (error) {
            console.log("Error while fetching data", error);
         }
      };
      fetchData()
   }, []);
  return (
    <div className='userTable'>
      <Link to="/add" className='btn-primary' >Add User</Link>
      <table className='table table-bordered'>
         <thead>
            <tr>
               <th scope="col"> S.No </th>
               <th scope="col"> Name </th>
               <th scope="col"> Email</th>
               <th scope="col"> Address </th>
               <th scope="col"> Actions</th>
            </tr>
         </thead>
         <tbody>
            {users.map((user, key) => {
               return (
               <tr>
               <td>{key+1}</td>
               <td>{user.name}</td>
               <td>{user.email}</td>
               <td>{user.address}</td>
               <td>
                  <Link to={`/update/${user._id}`}>
                  <button>Update</button></Link>
                  <button>Delete</button>
               </td>
            </tr>
               );
            })}
           
         </tbody>
      </table>
    </div>
  )
}

export default User