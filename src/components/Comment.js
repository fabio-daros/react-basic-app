import React from "react";
import { formatRelative } from "date-fns";
import {enIE} from 'date-fns/locale';

import "./Comment.css";
import userImage from "../assets/user.png";


const Comment = props => { // Statless component or dumb component. It is a function that receives props as an argument and returns what should be rendered.


    return <div className="Comment">
        <img class="avatar" src={userImage} alt="props.name" />
        <div class="content">
            <p class="name">{props.name}</p>
            <p class="email">{props.email}</p>
            <p class="message">{props.children}</p>
            <p class="date">{formatRelative(props.date, new Date(), {locale: enIE})}</p>
            <button class="close" onClick={props.onRemove}>&times;</button>
        </div>
    </div>
};

export default Comment;