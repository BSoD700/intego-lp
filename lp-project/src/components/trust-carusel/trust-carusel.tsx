import React, { FC } from 'react';
import { reviews } from './reviews-text';
import './trust-carusel.scss';
import quote from '@/assets/images/quote.png';
import trustRating from '@/assets/images/trust-rating.png';
interface TrustCaruselProps {}

const TrustCarusel: FC<TrustCaruselProps> = () => {
    return (
        <div className="trust-caruse-wrapper">
            <div className="container">
                <h2>Check out what our customers have to say</h2>
                <div className="trust">
                    <p>Trustpilot Excellent</p>
                    <img src={trustRating} alt="rate" />
                    <p>4.8</p>
                </div>
                <div className="cards">
                    {reviews.map((review, index) => {
                        return (
                            <div key={index} className="card">
                                <div className="header">
                                    <img src={quote} alt="quote" />
                                    <img src={trustRating} alt="rate" />
                                    <p>{review.text}</p>
                                </div>
                                <div className="footer">
                                    <img src={review.img} alt="user" />
                                    <div className="text-footer">
                                        <h5>{review.name}</h5>
                                        <p>{review.location}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
    


export default TrustCarusel;
