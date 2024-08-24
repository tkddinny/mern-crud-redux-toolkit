import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../Redux/SliceReducer/CreateReducer";
import { useNavigate, useParams } from "react-router-dom";

const UserUpdate = () => {
  const { id } = useParams(); 
  console.log('id is',id)
  const user = useSelector((state) => state.user.isUserUpdate);
  console.log( 'user is',user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [contact, setContact] = useState(user?.contact || "");


  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setContact(user.contact);
    } else{
      console.log('user not found')
    }
  }, [user]);

  const handleUpdate = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(userUpdate({ id, name, email, contact }));
      navigate("/get");
    },
    [dispatch, id, name, email, contact, navigate]
  );

  return (
    <form onSubmit={handleUpdate}>
      <div className="input-wrapper">
        <p>Name</p>
        <input
          type="text"
          placeholder="Name"
          value={user?.name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="input-wrapper">
        <p>Email</p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
      </div>

      <div className="input-wrapper">
        <p>Contact</p>
        <input
          type="number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="Contact"
        />
      </div>

      <button type="submit">Update</button>
    </form>
  );
};

export default UserUpdate;

