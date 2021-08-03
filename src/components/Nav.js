import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText  } from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color = 'light' light expand='full'>
                <NavbarBrand href='/'>HavenCo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                     <NavItem>
                         <NavLink href='/'>home</NavLink>
                        <NavLink href='minecraft.havenco.xyz'>minecraft</NavLink>
                        <NavLink href='/'>about</NavLink>
                     </NavItem>
                    </Nav>
                 <NavbarText>HavenCo 2021 &copy;</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;