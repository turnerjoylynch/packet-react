import React, {useState} from "react"
import { Route, Redirect, Navigate, Routes, BrowserRouter } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import 'bootstrap/dist/css/bootstrap.min.css'


export const Packet = () => (
    <>
        <Route render={() => {
            if (localStorage.getItem("packet_token")) {
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)


// export const Packet = () => (
//     <>
//         <Route render={() => {
//             if (localStorage.getItem("packet_customer")) {
//                 return (
//                     <>
//                         <Route render={props => <NavBar {...props} />} />
//                         <h1>Hello world</h1>
//                         <Route render={props => <ApplicationViews {...props} />} />
//                     </>
//                 )
//             } else {
//                 return <Redirect to="/login" />
//             }
//         }} />

//         <Route path="/login" render={props => <Login {...props} />} />
//         <Route path="/register" render={props => <Register {...props} />} />
//     </>
// )

// export const Packet = () =>{
//     const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("packet_user") !== null)

//     const setAuthUser = (user) => {
//         sessionStorage.setItem("packet_user", JSON.stringify(user))
//         setIsAuthenticated(sessionStorage.getItem("packet_user") !== null)
//     }

//     const clearUser = () => {
//         sessionStorage.clear();
//         setIsAuthenticated(sessionStorage.getItem("packet_user") !== null)
//       }

//     return (
//         <>
//             <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
//             <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
//             {/* <Footer clearUser={clearUser} isAuthenticated={isAuthenticated}/> */}
//         </>
//     )
// }