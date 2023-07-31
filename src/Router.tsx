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


            {/* <Route path="/" element={<RouterLayout />} >
                <Route path="/" element={<HomePage />} />
            </Route> */}
            <Route path="/Login" element={<UserLogin />} />

//

            <Route path="/" element={<RouterLayout />}>
                {/* Route for LandingPage */}
                <Route path="/" element={<HomePage />} />

                {/* Route for Register 
                TODO: */
                }
                {/* <Route path="/register" element={<RegisterLayout />}>
                    <Route path="/" element={<Register />} />
                    <Route path="user" element={<RegisterAsUser />} />
                    <Route path="sommelier" element={<RegisterAsSommelier />} />
                </Route> */}

                {/* Route for Login */}
                <Route path="/login" element={<UserLogin />} />

                {/* Routes for the Dashboard TODO: 
                
                 <Route path="/dashboard" element={<Dashboard />}>
                     Route for My Reservations   
                    <Route path="/my-reservations" element={<MyReservations />} />
                    /* Route for My Tastings  
                    <Route path="/my-tastings" element={<MyTastings />} />
                    /* Route for Tastings Publication (only for Sommelier) 
                    <Route path="/publish-tastings" element={<PublishTastings />} />
                </Route>
                
                
                */}
               
            </Route>







        </Routes>
    )
}