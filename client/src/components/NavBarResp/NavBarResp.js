import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBarResp = () => {
  return (
    <>
      <Container className='navbar'>
        <Navbar
          className='mobilenav'
          collapseOnSelect
          expand='xs'
          bg='dark'
          variant='dark'>
          <Container>
            <Navbar.Toggle
              aria-controls='responsive-navbar-nav-toggle'
              className='responsive-navbar-nav-toggle'
            />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/projects'>Projects</Nav.Link>
                <Nav.Link href='/about'>About</Nav.Link>
                <Nav.Link href='/contact'>Contact</Nav.Link>
                <Nav.Link href='/experimental'>Experimental</Nav.Link>
                <Nav.Link href='/Blog'>Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBarResp;
