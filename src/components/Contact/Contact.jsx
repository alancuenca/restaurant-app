import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import './Contact.css';
import markerImage from '../../assets/images/marker.png';
import foodImage from '../../assets/images/food_table_angle.jpeg'

function Contact() {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-info">
        {/* <div className="contact-address">
          <GiSmartphone className='icon_phone' />
          <p>(123) 456-7890</p>
          <FaMapMarkerAlt className='icon_marker' />
          <p>123 Main St, Anytown USA</p>
        </div> */}
        <div className="contact-form">
          <h3>Book A Table</h3>
          <form>
            <label>Party size:</label>
            <input type="number" min="1" max="10" required />
            <label>Date:</label>
            <input type="date" required />
            <label>Time:</label>
            <input type="time" required />
            <button type="submit">Book now</button>
          </form>
        </div>
        <div className="contact-map">
          <img src={markerImage} alt="Map marker" />
        </div>
        <div className='food-img'>
          <img src={foodImage} alt="food" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
