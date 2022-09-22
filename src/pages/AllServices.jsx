import React from 'react'
import Nav from "react-bootstrap/Nav";

const AllServices = () => {
  return (
    <div className="all_services">
      <Nav fill variant="tabs" className="all_services_menu">
        <Nav.Item>
          <Nav.Link href="/home">Послуги клініки</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Технології і методики</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Ціни</Nav.Link>
        </Nav.Item>
      </Nav>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default AllServices