import React from 'react';
import './style.scss';
import {Button} from "../button";

export const Card = ({img, title, excerpt, actions}) => {
    let cardImage = img ? <div className="card__image"><img src={img} alt=""/></div> : null;

    return (
        <div className="card">
            {cardImage}

            <div className="card__main">
                <h2>{title}</h2>
                <p>{excerpt}</p>
            </div>

            <div className="card__actions">
                {actions}
            </div>
        </div>
    )
};
