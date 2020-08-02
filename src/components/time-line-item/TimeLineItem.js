import React from 'react';
import './style.scss';

export const TimeLineItem = ({year, isActive, onclick, isLast}) => {
    return (
        <div className={`timeline-item ${isActive ? 'timeline-item--active' : ''}`}>
            <span className='timeline-item__year'>{year}</span>
            <svg className="timeline-item__circle" onClick={onclick}>
                {
                    !isLast && <line x1="50" y1="50" x2="50" y2="150" style={{strokeWidth: 3}}/>
                }
                <circle cx="50" cy="42" r="40" strokeWidth="3"/>
                <circle cx="50" cy="42" r="20" fill="#57a1dc" strokeWidth="3"/>
            </svg>
        </div>
    )
};
