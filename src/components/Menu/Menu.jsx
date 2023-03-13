import React, { useState } from 'react';
import './Menu.css';
import MenuLinks from './MenuLinks';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="menu">
            <div className="burger" onClick={toggleMenu}>
                <div className={isOpen ? "line--1 open" : "line--1"}></div>
                <div className={isOpen ? "line--2 open" : "line--2"}></div>
                <div className={isOpen ? "line--3 open" : "line--3"}></div>
            </div>
            <MenuLinks isOpen={isOpen} />
        </div>
    );
}

export default Menu;
