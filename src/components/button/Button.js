import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const Button = (
    {
        children,
        color,
        utilities,
        onClick,
        type
    }
) => {
    return (
        <button
            type={type}
            className={`btn btn--${color} ${utilities}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    color: 'primary',
    utilities: '',
    type: '',
    onClick: () => {}
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'alternative']),
    utilities: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};
