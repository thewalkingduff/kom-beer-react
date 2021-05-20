import React from 'react';
import { Nav, NavLogoLink, NavIcon, Bars } from './NavbarElements2';

const Navbar2 = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavLogoLink to='/'></NavLogoLink>
                {/* <NavIcon onClick={toggle}> */}
                {/* <p>Menu</p> */}
                <Bars onClick={toggle} />
                {/* </NavIcon> */}
            </Nav>
        </>
    );
};

export default Navbar2;