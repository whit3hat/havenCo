import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText  } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
      <Router>
        <div>
            <Navbar color = 'light' light expand='full'>
                <NavbarBrand href='/'>HavenCo</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                     <NavItem>
                        <NavLink href='/'>home</NavLink>
                        <NavLink href='minecraft.havenco.xyz'>minecraft</NavLink>
                        <NavLink href='/About' to={About}>about</NavLink>
                        <NavLink href='https://en.wikipedia.org/wiki/HavenCo'>Wiki</NavLink>
                     </NavItem>
                    </Nav>
                 <NavbarText>HavenCo 2021 &copy;</NavbarText>
                </Collapse>
            </Navbar>

            <Switch>
                <Route exact path='/' />
                <Route exact path='/About' component={About} />
            </Switch>
        </div>
     </Router>
        );
}

export default Navigation;