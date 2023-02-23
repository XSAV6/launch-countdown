import React from "react";
import "./CountdownItem.css";

const CountdownItem = ({ num, type }) => {
    return (
        <div className="CountdownItemCont">
            <span className="CountdownItem">{num}</span>
            <span className="type">{type}</span>
        </div>
    );
};

export default CountdownItem;
