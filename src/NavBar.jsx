import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarItem = ({ name, id, child }) => {
  if (child) {
    return (
      <NavDropdown title={name} id={id}>
        {child.map((subItem) => (
          <NavbarItem key={subItem.id} {...subItem} />
        ))}
      </NavDropdown>
    );
  } else {
    return <Nav.Link href={`#${id}`}>{name}</Nav.Link>;
  }
};

function OffcanvasExample(props) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container fluid>
          {props.navbar && props.navbar.map((navItem) => (
            <NavbarItem key={navItem.id} {...navItem} />
          ))}
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
