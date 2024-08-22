import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import BusinessPage from "../pages/BusinessPage/BusinessPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <ErrorPage> </ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>, 
               
            }, 
            {
                path:'/business/:id',
                element:<BusinessPage></BusinessPage>,
                loader: async () =>{
                 const response = await fetch('../data(1).json');
                 return response.json();
               }
               },
            
            
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }    
]);

export default router;