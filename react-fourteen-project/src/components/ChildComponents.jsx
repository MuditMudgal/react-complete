import React from 'react'

const ChildComponents = React.memo(
    (props) => {
    
        console.log("Child component re render again");

    return (
        <div>
            <button 
            onClick={props.handleClick}>
                {props.ButtonName}
            </button>
        </div>
    );
});

export default ChildComponents
