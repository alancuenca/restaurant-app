import React from 'react';
import { Link } from 'react-scroll';

function HeaderLinks({ isOpen, toggleMenu }) {
    const links = [
        { to: 'food-menu', label: 'Menu' },
        { to: 'about', label: 'About' },
        { to: 'testimonials', label: 'Testimonials' },
        { to: 'events', label: 'Events' },
        { to: 'contact', label: 'Contact' },
    ];

    const options = {
        spy: true,
        smooth: true,
        duration: 500,
        offset: -100, // add space above the component
    };

    const handleClick = () => {
        toggleMenu();
    };

    return (
        <header className={isOpen ? 'menu__container open' : 'menu__container'}>
            {links.map((link) => (
                <Link
                    key={link.to}
                    to={link.to}
                    {...options}
                    className="menu__item"
                    onClick={handleClick}
                >
                    {link.label}
                </Link>
            ))}
        </header>
    );
}

export default HeaderLinks;
