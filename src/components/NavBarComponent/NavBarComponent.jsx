import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useCategory } from '../../hooks/useCategory';

const NavBarComponent = () => {

    const {category} = useCategory();

    
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Link to='/'>JStore</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <NavDropdown title="Categorias" id="basic-nav-dropdown">
                    {category.map((item, index) => {
                        return ( 
                            <NavDropdown.Item key={index}>
                                <Link to={`/category/${item}`}>{item}</Link>
                            </NavDropdown.Item>
                        );
                        })}
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>

            <Link to='/create-product'>Crear Producto Nuevo</Link>

            <CartWidget/>
        </Container>
        </Navbar>
    );
    }

export default NavBarComponent;