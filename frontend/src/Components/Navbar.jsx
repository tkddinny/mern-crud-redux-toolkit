import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch  } from 'react-redux'
import { logout } from '../Redux/SliceReducer/adminSlice'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate("/")
  }

  return (
    <>
      <nav>
          <Link to="/"> <h2>logo</h2> </Link>
        <ul>
          <Link to="home"><li>Home</li></Link>
          <Link to="register"><li>Register</li></Link>
          <Link to="get"><li>Get User</li></Link>
          {/* <li onClick={() => {dispatch(logout()) ; navigate("/") }}>Logout</li> */}
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar