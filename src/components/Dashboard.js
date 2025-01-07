import React from "react";
import Sidebar from "./Sidebar";
import Graph from "./Graph";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Container style={{ marginLeft: "260px", paddingTop: "20px", display:"inline-block", width:"79%" }}>
        <Row>
          <Col>
            <h2>Welcome to Your Dashboard</h2>
            <Graph />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
