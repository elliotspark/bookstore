import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className='m'  bg="dark" variant="dark">
            <Container>
                <Navbar.Text className="mx-auto">
                    Made With &#10084; By Manish  &copy; {new Date().getFullYear()} Bookstore
                </Navbar.Text>
            </Container>
        </Navbar>
    );
};

export default Footer;
