import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/what">What is Kombucha?</SidebarLink>
                <SidebarLink to="/about">About Us</SidebarLink>
                <SidebarLink to="/contact">Contact</SidebarLink>
                <SidebarLink to="/">Home</SidebarLink>
            </SidebarMenu>
            {/* <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap> */}
        </SidebarContainer>
    )
}

export default Sidebar
