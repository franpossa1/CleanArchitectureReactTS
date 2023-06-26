import { Route, Routes } from "react-router-dom"
import { HomePage } from "./Pages/Home"
import { UserLogin } from "./Pages/Auth/UserLogin"
import { RouterLayout } from "./Layout/RouterLayout"
/**
 * Represents the Routes that would be rendered
 * @RouterLayout   Represents all the other content that would be rendered in the route
 * @HomePage   MainPage, menu
 * @UserLogin  Login of User. credentials of sign in
 
 */
export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route path="/" element={<RouterLayout />} >
                <Route path="/" element={<HomePage />} />
            </Route>
                <Route path="/Login" element={<UserLogin />} />

        </Routes>
    )
}