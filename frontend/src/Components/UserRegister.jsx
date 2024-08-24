import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userPost } from "../Redux/SliceReducer/CreateReducer";
import { useNavigate } from "react-router-dom";

const UserRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const userCreate = useSelector((state) => state.user.userCreate);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userPost({ name, email, contact }));
      navigate('/get')
    },
    [dispatch ,name, email, contact]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <p>name</p>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="input-wrapper">
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

        <div className="input-wrapper">
          <p>contact</p>
          <input
            type="number"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
            }}
            placeholder="contact"
          />
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UserRegister;
