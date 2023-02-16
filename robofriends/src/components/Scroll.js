import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className = 'container' style = {{overflow: 'scroll', border: '2px solid black'}}>
            {props.children};
        </div>
    );
};

export default Scroll;