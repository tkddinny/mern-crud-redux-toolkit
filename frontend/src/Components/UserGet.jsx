import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { userGet } from '../Redux/SliceReducer/CreateReducer'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { userDelete } from '../Redux/SliceReducer/CreateReducer'

const UserGet = () => {

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.user.userList)
  const isLoading = useSelector((state) => state.user.isLoading)
  const isError = useSelector((state) => state.user.isError)
  const userDeleteState = useSelector((state) => state.user.userDelete)


  const handleDelete = (item) =>{
    dispatch(userDelete(item._id))
  }

  useEffect(() =>{
    dispatch(userGet())
  },[userList , userDeleteState])

  return (
    <>
      <div className="main-table">
      <table className='table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>contact</th>
          <th>action</th>
        </tr>
        {
          userList ? 
          userList.map((item , index) =>(
          <tr key={index}>
          <td>{item._id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.contact}</td>
          <td className='action'>
          <Link to={`/update/${item._id}`}><FaEdit className='edit'/></Link>
          <MdDelete onClick={()=>handleDelete(item)} className='delete'/>
          </td>
        </tr>
          ))
           : isLoading ? <h1>loading</h1> : isError ? <h1>error</h1> : <h1>data not found</h1>
        }
      </table>
      </div>
    </>
  )
}

export default UserGet