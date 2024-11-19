import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h1 className="text-5xl text-center text-rose-600 py-10">Page is not found.</h1>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            }
        ]
        
    }
])

export default router;