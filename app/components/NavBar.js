'use client';

import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Container, Nav } from 'react-bootstrap';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""} bg="dark" variant="dark">
            <Container>
                <BootstrapNavbar.Brand href="#home">
                    <img src="/logo.png" alt="Logo" height="40" />
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#desenhos-no-papel">Desenhos no papel</Nav.Link>
                        <Nav.Link href="#digital">Digital</Nav.Link>
                        <Nav.Link href="#sobre-mim">Sobre mim</Nav.Link>
                        <Nav.Link href="#joguinho">Joguinho</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src="path_to_icon1.png" alt="Icon 1" /></a>
                            <a href="#"><img src="path_to_icon2.png" alt="Icon 2" /></a>
                            <a href="#"><img src="path_to_icon3.png" alt="Icon 3" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};
