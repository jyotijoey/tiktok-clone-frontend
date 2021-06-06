import React, { useState } from 'react';
import "./Input.css";
import { Link } from "react-router-dom";

function Entry() {
    const [input, setInput] = useState({});

    return (
        <div className="input">
            <input type="text" name="accountName" id="accountName" placeholder="Enter your account name" />
            <input type="text" name="videoDescription" id="videoDescription" placeholder="Enter account description" />
            <input type="url" name="videoLink" id="videoLink" placeholder="Enter Video Link"/>
            <input type="url" name="song" id="song" placeholder="Enter the Song"/>
            <Link to="/">
            <button onClick="handle new video input">Save</button>
            </Link>
            <Link to="/">
            <button >Cancel</button>
            </Link>
        </div>
    )
}

export default Entry;
