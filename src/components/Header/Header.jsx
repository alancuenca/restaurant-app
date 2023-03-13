import React, { useState } from 'react';
import './Header.css';
import HeaderLinks from './HeaderLinks';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="menu">
            <div className="burger" onClick={toggleMenu}>
                <div className={isOpen ? "line--1 open" : "line--1"} />
                <div className={isOpen ? "line--2 open" : "line--2"} />
                <div className={isOpen ? "line--3 open" : "line--3"} />
            </div>
            <HeaderLinks isOpen={isOpen} />
        </header>
    );
}

export default Header;
