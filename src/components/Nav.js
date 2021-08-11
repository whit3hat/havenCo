import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText  } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Minecraft from './Minecraft';

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
                        <NavLink href='/Minecraft' to={Minecraft}>minecraft</NavLink>
                        <NavLink href='/About' to={About}>about</NavLink>
                        <NavLink href='https://en.wikipedia.org/wiki/HavenCo'>Wiki</NavLink>
                     </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <Switch>
                <Route exact path='/' />
                <Route exact path='/About' component={About} />
                <Route exact path='/Minecraft' component={Minecraft} />
            </Switch>
        </div>
     </Router>
        );
}

export default Navigation;