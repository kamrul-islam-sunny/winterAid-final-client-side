import { createBrowserRouter, Form } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Donations from "../Pages/Donations";
import Details from "../Pages/Details";
import DonateForm from "../Pages/DonateForm";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Private from "../private/Private";
import Dashboard from "../Pages/Dashboard";
import UpdateForm from "../Pages/UpdateForm";
import ErrorPage from "../Pages/ErrorPage";
import ForgetPass from "../Pages/ForgetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation-campaigns",
        loader: () => fetch("/Campaigns.json"),
        element: <Donations></Donations>,
      },
      {
        path: "/details/:id",
        element: <Private><Details></Details></Private>,
        loader:() => fetch("/Campaigns.json")
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      },
      {
        path:'/auth/login',
        element:<Login></Login>
      },
      {
        path: '/dashboard',
        element: <Private><Dashboard></Dashboard></Private>,
      },
      {
        path: '/update-profile',
        element: <Private><UpdateForm></UpdateForm></Private>
      },
      {
        path: '/forgetPassword',
        element: <ForgetPass></ForgetPass>
      }
    ],
  },
  {

  },
]);

export default router;
