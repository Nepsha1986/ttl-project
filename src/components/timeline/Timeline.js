import React, {useState, useEffect, Fragment} from 'react';

import './style.scss';
import TimeLineService from "../../services/timeLineService";
import {TimeLineItem} from "../time-line-item";
import {TimeLineItemEvent} from "../time-line-item-event";

export const Timeline = () => {
    let [data, setData] = useState([]);
    let container = React.createRef();

    useEffect(() => {
        TimeLineService.getEvents().then(events => {
            events[0].isActive = true;
            setData(events);
        })
    }, []);

    let setActive = (year) => {
        setData((data) => {
            return data.map(item => {
                item.isActive = year === item.year;
                return item;
            });
        });

    };

    return (
        <div className='timeline-block' ref={container}>
            <div className="timeline-block__timeline">
                {data.map((item, i) => {
                    return (
                        <div key={item.year}>
                            <TimeLineItem
                                year={item.year}
                                events={item.events}
                                isActive={item.isActive}
                                onclick={() => {
                                    setActive(item.year);
                                }}
                                isLast={i === data.length - 1}
                            />
                        </div>
                    )
                })}
            </div>

            {data.map(item => {
                return (
                    item.isActive &&
                    <div key={item.year} className="timeline-block__events">
                        {item.events.map(event => (
                            <Fragment key={event._id}>
                                <TimeLineItemEvent event={event}/>
                            </Fragment>
                        ))}
                    </div>
                )
            })}
        </div>
    )
};
