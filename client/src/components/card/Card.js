import React from 'react';
import './style.scss';
import {Button} from "../button";

export const Card = ({img, title, excerpt }) => {
    return (
        <div className="card">
            <div className="card__image">
                <img src={img} alt=""/>
            </div>

            <div className="card__main">
                <h2>{title}</h2>
                <p>{excerpt}</p>
            </div>

            <div className="card__actions">
                <Button onClick={()=> {alert('see more')}}>See more...</Button>
            </div>
        </div>
    )
};
