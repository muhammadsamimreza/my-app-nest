import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";
import Home from "../pages/Home";
import AllApp from "../pages/AllApp";
import Installation from "../pages/Installation";
import AppDetails from "../pages/AppDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children:[
            {
                index: true,
                path: '/',
                Component: Home
            },
            {
                path: '/allapp',
                Component: AllApp
            },
            {
                path: '/appdetails/:appid',
                Component: AppDetails
            },
            {
                path: '/installation',
                Component: Installation
            }
        ]
    }
])

export default router;