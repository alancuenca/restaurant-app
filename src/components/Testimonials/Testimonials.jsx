import React, { useEffect } from "react";
import Card from "../../features/Card/Card";
import "./Testimonials.css"
import userPhoto1 from '../../assets/images/user_photo_1.jpeg';
import userPhoto2 from '../../assets/images/user_photo_2.jpeg';
import userPhoto3 from '../../assets/images/user_photo_3.jpeg';

function Testimonial() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const windowHeight = window.innerHeight;
    const offset = 50;

    const handleScroll = () => {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - offset && cardTop + card.offsetHeight > offset) {
          card.classList.add("fade-in");
        } else {
          card.classList.remove("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <h2 className="title">Testimonials</h2>
      <div className="card-container">
        <Card
          image={userPhoto1}
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          source="Jane Doe"
        />
        <Card
          image={userPhoto2}
          quote="Vestibulum nec gravida velit. Vivamus tincidunt elit sit."
          source="Jane Smith"
        />
        <Card
          image={userPhoto3}
          quote="Donec ultricies consequat mollis. Nulla facilisi."
          source="Bob Johnson"
        />
      </div>
    </section>
  );
}

export default Testimonial;
