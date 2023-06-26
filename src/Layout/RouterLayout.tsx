import { Outlet } from "react-router-dom"
import { NavBar } from "./navbar/NavBar"
/**
 * Represents the layout that would be rendered in the front <br/>
 * @Outlet -  Represents all the other content that would be rendered in the route
 
 */
export const RouterLayout : React.FC<{}> = () => {
    return (
        <>
        <NavBar/>
        <Outlet/>
        </>
    )
}