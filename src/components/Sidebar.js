import React from "react";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Sidebar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link as={Link} to="/dashboard">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/settings">
          Settings
        </Nav.Link>
        <Nav.Link as={Link} to="/profile">
          Profile
        </Nav.Link>
      </Nav>
      <Button variant="danger" onClick={handleLogout} className="logout-btn">
        Logout
      </Button>
    </div>
  );
};

export default Sidebar;
