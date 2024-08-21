import Style from './Navbar.module.scss';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import React, { useState } from 'react';
 const Navigation = ({menuItems}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
         <nav className={Style.NavStyle} >
        {menuItems.map((items, index) => {
            return(
            <ul key={index}>
                <li><a href={items.first}> {items.second}</a> </li>
                {index < menuItems.length - 1 && <hr />}
            </ul>
            )
        })}
            <h4>Leo-Lov</h4>
        </nav>
        <nav className={Style.NavMob} id="myDiv" style={{ display: isOpen ? 'block' : 'none' }} >
        {menuItems.map((items, index) => {
            return(
            <ul key={index}>
                <li><a href={items.first}> {items.second}</a> </li>
                {index < menuItems.length - 1 && <hr />}
            </ul>
            )
        })}
            <h4>Leo-Lov</h4>
            <div className={Style.close} onClick={() => setIsOpen(!isOpen)} ><MenuOpenIcon/> </div>
        </nav>
        <span id="myDiv" style={{ display: isOpen ? 'none' : 'block' }} className={Style.mobileMenu} onClick={() => setIsOpen(!isOpen)}><MenuIcon/></span>
        </>
    );
};

export default Navigation; 