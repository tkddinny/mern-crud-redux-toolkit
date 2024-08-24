import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Redux/Store/Store.js'
import { Provider } from 'react-redux'
import Private from './Private/Private.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import UserRegister from './Components/UserRegister.jsx'
import UserSingle from './Components/UserSingle.jsx'
import UserGet from './Components/UserGet.jsx'
import UserUpdate from './Components/UserUpdate.jsx'
import Register from './Admin/Register.jsx'
import Login from './Admin/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Register />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/home',
        element: (<Private><Home /></Private>) 
      },
      {
        path: '/register',
        element: (<Private><UserRegister /></Private> )
      },
      {
        path: '/single',
        element: (<Private><UserSingle /></Private>) 
      },
      {
        path: '/get',
        element: (<Private><UserGet /></Private>) 
      },
      {
        path: '/update/:id',
        element: (<Private><UserUpdate /></Private> )
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
