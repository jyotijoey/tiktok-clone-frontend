import React from 'react';
import "./Input.css";
import { Link } from "react-router-dom";

function Entry() {
    return (
        <div className="input">
            
            <input type="url" name="videoLink" id="videoLink" placeholder="Enter Video Link"/>
            <input type="url" name="song" id="song" placeholder="Enter the Song"/>
            <Link to="/">
            <button>Save</button>
            </Link>
            <Link to="/">
            <button >Cancel</button>
            </Link>
        </div>
    )
}

export default Entry;
