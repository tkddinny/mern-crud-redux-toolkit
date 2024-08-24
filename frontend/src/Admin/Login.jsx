// import React, { useCallback , useState } from 'react'
// import { useDispatch , useSelector } from 'react-redux'
// import { adminLogin } from '../Redux/SliceReducer/adminSlice'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   console.log('email is' , email , 'passwor is' ,password)

//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const handleSubmit = useCallback((e)=>{
//     e.preventDefault()
//     dispatch(adminLogin(email, password))
//     navigate('/')
//   },[])

//   return (
//     <form onSubmit={handleSubmit}>

//       <div>
//         <p>email</p>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//           placeholder="email"
//         />
//       </div>

//       <div>
//         <p>password</p>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//           placeholder="password"
//         />
//       </div>

//       <button type="submit">login</button>
//     </form>
//   )
// }

// export default Login

import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { adminLogin } from "../Redux/SliceReducer/adminSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const result = await dispatch(adminLogin({ email, password }));

      if (result.meta.requestStatus === "fulfilled") {
        navigate("/");
      } else {
        console.log("Login failed:", result.error.message);
      }
    },
    [email, password, dispatch, navigate] // dependencies
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
          required
        />
      </div>

      <div>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
