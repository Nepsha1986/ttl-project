import React from 'react';
import {Card} from "../card";

export const TimeLineItem = ({year, events, isActive, onclick}) => {
    return (
        <div key={year}
             className={`timeline-item ${isActive ? 'timeline-item--active' : ''}`}>
            {year}
            <svg className="timeline-item__circle" onClick={onclick}>
                <line x1="50" y1="0" x2="50" y2="150" style={{strokeWidth: 3}}/>
                <circle cx="50" cy="50" r="40" strokeWidth="3"/>
                <circle cx="50" cy="50" r="20" fill="#57a1dc" strokeWidth="3"/>
            </svg>

            <div className="timeline-item__note-container">
                {
                    events.map(event => {
                        return (
                            <div key={event.id}
                                 className={`timeline-item__note ${isActive ? 'fade-in' : 'fade-out'}`}
                            >
                                <Card title={event.title} excerpt={event.excerpt}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};
