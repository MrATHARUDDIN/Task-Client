import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import TaskList from './pages/TaskList.jsx';
import AddTask from './pages/AddTask.jsx';
import Private from './pages/Private.jsx';
import SignUp from './pages/Signup.jsx';
import PrivateRoute from './pages/Privateroute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path: "/Login",
        element:<Login></Login>
      },
      {
        path: "/tasklist",
        element:<PrivateRoute><TaskList></TaskList></PrivateRoute>
      },
      {
        path: "/addtask",
        element:<PrivateRoute><AddTask></AddTask></PrivateRoute>
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <React.StrictMode>
    <Private>
    <RouterProvider router={router} />
  </Private>
  </React.StrictMode>
);