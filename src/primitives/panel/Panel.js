import React, {useState} from 'react';
import "./style.scss";
import Icon from "../icon";

const Panel = ({headerSlot, bodySlot, opened}) => {
    const [expand, setExpand] = useState(opened);

    return (
        <div className={`panel${expand ? ' panel--expanded' : ' panel--closed'}`}>
            {!expand &&
            <div
                className="panel__header"
                onClick={() => setExpand(!expand)}
            >
                <h6 className="panel__title">{headerSlot}</h6>
            </div>
            }

            {expand &&
            <>
                <div className="panel__body">
                    {bodySlot}
                </div>

                <button
                    className="panel__close-btn"
                    color={"primary"}
                    type="button"
                    onClick={() => {
                        setExpand(false);
                    }}>
                    <Icon icon={'fas fa-angle-up'}/>
                </button>
            </>
            }
        </div>
    )
};

export default Panel;
