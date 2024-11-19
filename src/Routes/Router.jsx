import { createBrowserRouter, Form } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import Donations from "../Pages/Donations";
import Details from "../Pages/Details";
import DonateForm from "../Pages/DonateForm";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <h1 className="text-5xl text-center text-rose-600 py-10">
        Page is not found.
      </h1>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation-campaigns",
        element: <Donations></Donations>,
        loader: () => fetch("Campaigns.json"),
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:() => fetch("Campaigns.json")
      },
      {
        path:'/donate-form',
        element: <DonateForm></DonateForm>
      },
      {
        path:'/auth/register',
        element:<Register></Register>
      },
      {
        path:'/auth/login',
        element:<Login></Login>
      }
    ],
  },
  {

  },
]);

export default router;
