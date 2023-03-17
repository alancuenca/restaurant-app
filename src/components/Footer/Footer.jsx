import { FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiSmartphone } from 'react-icons/gi'
import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer__content">
                <div className="footer__contact">
                    <div className="footer__contact-item">
                        <p className="footer__contact-title">Call Us</p>
                        <p><GiSmartphone />(123) 456-7890</p>
                    </div>
                    <div className="footer__contact-item">
                        <p className="footer__contact-title">Address</p>
                        <p><FaMapMarkerAlt /> 123 Main St, Anytown USA</p>
                    </div>
                    <div className='social'>
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>
                <div className="footer__business-hours">
                    <p className="footer__business-hours-title">Business Hours</p>
                    <ul>
                        <li>Monday: 9am - 9pm</li>
                        <li>Tuesday: 9am - 9pm</li>
                        <li>Wednesday: 9am - 9pm</li>
                        <li>Thursday: 9am - 9pm</li>
                        <li>Friday: 9am - 10pm</li>
                        <li>Saturday: 10am - 10pm</li>
                        <li>Sunday: 10am - 9pm</li>
                    </ul>
                </div>
            </div>
            <div className='footer__copyright'>
                &copy; {year} Alan Cuenca
            </div>
        </div>
    )
}

export default Footer
