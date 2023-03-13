import React from 'react';

function MenuLinks({ isOpen }) {
    return (
        <div className={isOpen ? "menu__container open" : "menu__container"}>
            <div className="menu__item">Food</div>
            <div className="menu__item">About</div>
            <div className="menu__item">Community</div>
            <div className="menu__item">Contact</div>
            <div className="menu__item">Events</div>
        </div>
    );
}

export default MenuLinks;
