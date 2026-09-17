import React from "react";

const Child = (props) => {
    
    console.log("Child Component");
    
    return (
        <div>
            <h2>Child Component</h2>

            <button onClick={props.handleClick}>Child Increment</button>
        </div>
    );
};

export default Child;
