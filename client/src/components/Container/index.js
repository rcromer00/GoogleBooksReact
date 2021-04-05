import React from 'react';
import "./style.css";

function Container(props) {
    return <div className="./style.css" size={props.size}>{props.children}</div>
}

export default Container;