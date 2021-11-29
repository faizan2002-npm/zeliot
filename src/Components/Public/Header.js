import React from 'react'
import { Container, Image, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import SiteSettings from '../../Constants/SiteSettings';
import routes from './../../Routes/routes';

export const Header = () => {
    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "" && prop.show != 'no') {
                if (prop.name === 'Home') {
                    return (
                        <Nav.Item as="li" key={key}>
                            <Link className="nav-link" to={prop.layout + prop.path}>{prop.name}</Link>
                        </Nav.Item>
                    );
                } else {
                    return (
                        <Nav.Item as="li" key={key}>
                            <Link className="nav-link" to={prop.layout + prop.path}>{prop.name}</Link>
                        </Nav.Item>
                    );
                }
            } else {
                return null;
            }
        });
    };
    return (
        <>

            <header id="header">
                <Navbar as="nav" variant="dark" expand="lg">
                    <Container>
                        <Link className="navbar-brand" to="/">
                            <Image src={SiteSettings.SiteSettings[0].SITE_LOGO} alt="" fluid />
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto" as="ul" id="primary_main_menu">
                                {
                                    getRoutes(routes)
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
