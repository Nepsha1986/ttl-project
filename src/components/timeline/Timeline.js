import React, {useState, useEffect} from 'react';

import './style.scss';
import TimeLineService from "../../services/timeLineService";
import {TimeLineItem} from "../time-line-item";

export const Timeline = () => {
    let [data, setData] = useState([]);
    let container = React.createRef();

    useEffect(() => {
        TimeLineService.getEvents().then(events => {
            setData(events);
        })
    }, []);

    useEffect(() => {
        console.dir(container.current.clientWidth);
        console.dir(container.current.clientHeight);
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
        <div className='timeline' ref={container}>
            {data.map(item => {
                return (
                    <div key={item.year}>
                        <TimeLineItem
                            year={item.year}
                            events={item.events}
                            isActive={item.isActive}
                            onclick={() => {
                                setActive(item.year);
                            }}
                        />
                    </div>
                )
            })}
        </div>
    )
};
