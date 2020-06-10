import React from 'react';

function Student( props)
{
    return(
        <div>
        <h1>Name: {props.name}</h1>
        <h1>Course: {props.course}</h1>
        <h1>Class: {props.class}</h1>
        </div>
    )
}

export default Student ;