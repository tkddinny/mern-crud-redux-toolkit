import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminCreate  } from "../Redux/SliceReducer/adminSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(adminCreate({ name, email, password }));
      navigate('/login')
    },
    [dispatch, name, email, password]
  );


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="name"
        />
      </div>

      <div>
        <p>email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="email"
        />
      </div>

      <div>
        <p>password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
      </div>

      <button type="submit">register</button>
    </form>
  );
};

export default Register;
