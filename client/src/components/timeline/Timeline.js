import React, {useState, useEffect} from 'react';

import './style.scss';
import {Card} from "../card";

const timelineData = [
    {
        id: 1,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },

    {
        id: 2,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 3,
        date: '2014-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 4,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 5,
        date: '2017-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 6,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 7,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 8,
        date: '2015-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 9,
        date: '2012-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 10,
        date: '2011-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
    {
        id: 11,
        date: '1998-04-23T18:25:43.511Z',
        content: '',
        title: 'Some title here',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, perspiciatis?'
    },
];

export const Timeline = () => {
    let [data, setData] = useState(timelineData);

    let yearsEvents = data.reduce((acc, cur) => {
        let key = new Date(cur.date).getFullYear();
        if(!acc[key]) acc[key] = [];
        acc[key].push(cur);
        return acc;
    }, {});

    console.log(yearsEvents);

    return (
        <div className='timeline'>

            {Object.keys(yearsEvents).map(item => {
                return (
                    <div key={item} className="timeline-item">
                        {item}
                        <svg className="timeline-item__circle">
                            <line x1="50" y1="0" x2="50" y2="150" style={{strokeWidth: 3}} />
                            <circle cx="50" cy="50" r="40" strokeWidth="3"/>
                            <circle cx="50" cy="50" r="20" fill="#57a1dc" strokeWidth="3"/>
                        </svg>

                        {
                            yearsEvents[item].map(event => {
                                return (
                                    <div key={event.id} className="timeline-item__note">
                                        <Card title={event.title} excerpt={event.excerpt}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })}
        </div>
    )
};
