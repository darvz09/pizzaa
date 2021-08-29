import React from 'react';
import {SidebarContainer,
        Icon,
        CloseIcon,
        SidebarMenu,
        SidebarLinks,
        SidebarRoute,
        SideBtnWrap
    }from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLinks to='/'>Pizza</SidebarLinks>
                <SidebarLinks to='/'>Dessert</SidebarLinks>
                <SidebarLinks to='/'>Full Menu</SidebarLinks>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/'>Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
