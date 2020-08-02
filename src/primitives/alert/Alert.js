import React from 'react';
import PropTypes from 'prop-types';

export const Alert = ({children, type}) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
        </div>
    )
};

Alert.defaultProps = {
    type: 'primary',
};

Alert.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
