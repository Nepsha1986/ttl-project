import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export const Button = (
    {
        children,
        color,
        utilities,
        ...props
    }
) => {
    return (
        <button
            className={`btn btn--${color} ${utilities}`}
            {...props}
        >
            {children}
        </button>
    )
};

Button.defaultProps = {
    color: 'primary',
    utilities: '',
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(['primary', 'secondary', 'alternative']),
    utilities: PropTypes.string,
};
