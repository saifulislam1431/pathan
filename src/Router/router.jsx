import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import RestPage from "../Layout/RestPage";
import SecondPage from "../Pages/SecondPage/SecondPage";
import ThirdPage from "../Pages/ThirdPage/ThirdPage";
import ForthPage from "../Pages/ForthPage/ForthPage";
import FifthPage from "../Pages/FifthPage/FifthPage";
import SixthPage from "../Pages/SixthPage/SixthPage";
import SeventhPage from "../Pages/SeventhPage/SeventhPage";
import EighthPage from "../Pages/EighthPage/EighthPage";
import NinthPage from "../Pages/NinethPage/NinthPage";
import FinalPage from "../Pages/FinalPage/FinalPage";

const route = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage />,
        element:<Main />,
        children:[
            {
                path:"/",
                element:<Home />
            }
        ]
    },
    {
        path:"/restPage",
        errorElement:<ErrorPage />,
        element:<RestPage />,
        children:[
            {
                path:"secondStep",
                element:<SecondPage />
            },
            {
                path:"thirdStep",
                element:<ThirdPage />
            },
            {
                path:"forthStep",
                element:<ForthPage />
            },
            {
                path:"fifthStep",
                element:<FifthPage />
            },
            {
                path:"sixStep",
                element:<SixthPage />
            },
            {
                path:"sevenStep",
                element:<SeventhPage />
            },
            {
                path:"eightStep",
                element:<EighthPage />
            },
            {
                path:"nineStep",
                element:<NinthPage />
            },
            {
                path:"finalStep",
                element:<FinalPage />
            },
        ]
    }
])
export default route;