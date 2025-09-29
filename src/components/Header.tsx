import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-[#007BFF]">
      <Container>
        <Navbar.Brand className="!text-5xl font-bold tracking-tight">
          To-Do App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-end">
          <Nav>
            <Nav.Link>
              <button className="py-2 px-4 rounded bg-[#FFFFFF] hover:bg-[#212529] hover:text-[#E9ECEF] text-[#495057] border-1 border-[#6C757D] hover:border-[#FFFFFF]">
                Iniciar Sesión
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
