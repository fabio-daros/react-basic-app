import React from "react";
import "./Comment.css";


const Comment = props => { // Statless component or dumb component. It is a function that receives props as an argument and returns what should be rendered.
    return <div className="Comment">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <p>{props.children}</p>
        <p>{props.date.toString()}</p>
        <button onClick={props.onRemove}>&times;</button>
    </div>
};

export default Comment;