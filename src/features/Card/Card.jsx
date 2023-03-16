import React from "react";
import "./Card.css";
import { ImQuotesLeft } from 'react-icons/im'

function Card({ image, quote, source }) {
    return (
        <>
        <div className="card">
            <ImQuotesLeft className="ImQuotesLeft"/>
            <img src={image} alt={image} />
            <p>{quote}</p>
            <span>- {source}</span>
        </div>
        </>
    );
}

export default Card;
