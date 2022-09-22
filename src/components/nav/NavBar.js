import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return (

        <ul className="navbar">

            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Packet</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/list">List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/list/create">Create List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/item">Item</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login" onClick={() => localStorage.removeItem("packet_customer")}>Logout</Link>
            </li>

        </ul>
    )
}


// function NavBar() {
//   return (
//     <Navbar bg="dark" expand="lg" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Packet</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#list" to="/list">List</Nav.Link>
//             <Nav.Link href="#link" to="/list/create">Create List</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;