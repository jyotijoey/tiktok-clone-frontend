import React from 'react';
import "./Input.css";
import { Link } from "react-router-dom";

function Entry() {

    return (
        <div className="input">
        <form action="http://localhost:9000/v2/posts" method="post" onSubmit={()=> this.history.push("/")}>
        
            <input type="text" name="channel" placeholder="Enter your account name" />
            <input type="text" name="description" placeholder="Enter account description" />
            <input type="text" name="link" placeholder="Enter Video Link"/>
            <input type="text" name="song" placeholder="Enter the Song"/>
            
            {/* <Link to="/"> */}
            <button type="submit" >Save</button>
            {/* </Link> */}
            <Link to="/">
            <button >Cancel</button>
            </Link>
        </form>
        </div>
    )
}

export default Entry;
