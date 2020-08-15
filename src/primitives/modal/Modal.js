import React, {useState} from 'react';
import './style.scss';

const Modal = (
    {
        children,
        headerSlot,
        actionsSlot,
        isActive,
        onClickClose
    }) => {

    return (
        isActive &&
        <div className="popup">
            <div className="popup__wrapper">
                <button className="popup__close-btn" onClick={onClickClose}>Close</button>
                {headerSlot && <div className="popup__header">{headerSlot}</div>}
                <div className="popup__body">
                    {children}
                </div>
                {actionsSlot && <div className="popup__header">{actionsSlot}</div>}
            </div>
        </div>
    )
};

export default Modal;
