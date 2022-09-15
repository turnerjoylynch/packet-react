import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
// import Nav from 'react-bootstrap/Nav';

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
                <Link className="navbar__link" to="/item">Item</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login" onClick={() => localStorage.removeItem("packet_customer")}>Logout</Link>
            </li>
        </ul>
    )
}

// function NavBar() {
//     return (
//       <Nav
//         activeKey="/home"
//         onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
//       >
//         <Nav.Item>
//           <Nav.Link href="/home">Packet</Nav.Link>
//         </Nav.Item>
//         {/* <Nav.Item>
//           <Nav.Link eventKey="link-1">Link</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="link-2">Packet</Nav.Link>
//         </Nav.Item> */}
//         <Nav.Item>
//           <Nav.Link eventKey="/login" onClick={() => localStorage.removeItem("packet_customer")}>
//             Logout
//           </Nav.Link>
//         </Nav.Item>
//       </Nav>
//     );
//   }
  
//   export default NavBar();