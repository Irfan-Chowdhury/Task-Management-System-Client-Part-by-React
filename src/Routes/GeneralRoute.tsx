import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Dashboard from "../Pages/Dashboard/Dashboard";
import TeamMember from "../Pages/TeamMember/TeamMember";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>,
                loader: () => fetch(`http://127.0.0.1:8000/api/dashboard`)
            },
            {
                path:'/team-members',
                element:<TeamMember></TeamMember>,
                loader: () => fetch(`http://127.0.0.1:8000/api/team-members`)
            }
        ]
    }
]);