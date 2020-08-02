import React from 'react';
import {Card} from "../card";

export const TimeLineItemEvent = ({ event }) => {
    return (
        <div className={`timeline-item-event`}>
            <Card title={event.title} excerpt={event.excerpt}/>
        </div>
    )
};
