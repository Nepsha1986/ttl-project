import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

export const Image = ({src, alt, width, height }) => {
    return (
        <Fragment>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}/>
        </Fragment>
    )
};

Image.defaultProps = {
    alt: 'Image',
    width: '100%',
    height: 'auto'
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
};
