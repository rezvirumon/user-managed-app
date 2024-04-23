// routes/Routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Home/Dashboard";
import Root from "../layout/Root";
import Error from "../pages/NotFound/Error";
import About from "../pages/About/About";
import AddUser from "../pages/AddUser/AddUser";
import UserList from "../pages/UserList/UserList";
import EditUser from "../pages/EditUser/EditUser";






const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/adduser',
                element: <AddUser></AddUser>
            },
            {
                path: '/userlist',
                element: <UserList></UserList>
            },
            {
                path: '/edituser',
                element: <EditUser></EditUser>
            },
            {
                path: 'about',
                element:<About></About>
            }
            
           
            
           
           
        ]
    }
]);

export default router;