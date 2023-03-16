import React, { useEffect } from "react";
import "./Hero.css";
import backgroundImage from "../../assets/images/food_table.avif";

function Hero() {
    useEffect(() => {
        const options = {
            rootMargin: "-50% 0px", // fade in when image is 50% visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const slogan = entry.target;
                if (entry.isIntersecting) {
                    slogan.classList.add("fade-in");
                } else {
                    slogan.classList.remove("fade-in");
                }
            });
        }, options);

        const sloganList = document.querySelectorAll(".hero__slogan");
        sloganList.forEach((slogan) => {
            observer.observe(slogan);
        });

        return () => {
            sloganList.forEach((slogan) => {
                observer.unobserve(slogan);
            });
        };
    }, []);

    return (
        <div className="hero">
            <div
                className="hero__background"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className={`hero__slogan`}>
                <h1>Welcome to Bites</h1>
                <p>Let us serve you</p>
                <button className="hero__button">Book A Table</button>
            </div>
        </div>
    );
}

export default Hero;
