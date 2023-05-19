import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddAToy from "../pages/addAToy/AddAToy";
import MyToys from "../pages/myToys/MyToys";
import UpdateToy from "../pages/updateToy/UpdateToy";
import AllToys from "../pages/allToys/AllToys";
import SingleToy from "../shared/singleToy/SingleToy";
import PrivateRouter from "./PrivateRouter";
import ViewDetails from "../pages/viewDetails/ViewDetails";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/addAToy',
                element:<AddAToy></AddAToy>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/myToys',
                element:<MyToys></MyToys>
            },
            {
                path:'/updateToy/:_id',
                element:<UpdateToy></UpdateToy>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params._id}`)

            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>
            },
            {
                path:'/singleToy/:_id',
                element:<PrivateRouter><SingleToy></SingleToy></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params._id}`)
            },
            {
                path:'/viewDetails/:_id',
                element:<PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params._id}`)
            }

        ]
    }
])

export default router;