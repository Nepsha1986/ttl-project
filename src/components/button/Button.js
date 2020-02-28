import React from 'react';

import './style.scss';

export const Button = (props) => {
    return (
        <button className='btn' onClick={props.onClick}>
            {props.children}
        </button>
    )
};
