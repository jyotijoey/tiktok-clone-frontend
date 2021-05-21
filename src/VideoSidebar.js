import React, { useState } from 'react';
import "./VideoSidebar.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import { Link } from "react-router-dom";

function VideoSidebar({likes, shares, messages}) {
    const [liked, setLiked] = useState(false);

    const addNewVideo = () => {
        console.log("i got clicked");
    };

    function handleClick() {
        if(liked){
            setLiked(false);
        }
        else{
            setLiked(true);
        }
    };
    return (
        <div className="videoSidebar">
            <Link to="/input">
            <div className="videoSidebar__button add" onClick={addNewVideo}>
            
            <IconButton>
                <AddIcon fontSize="large" />
            </IconButton>
            </div>
            </Link>
            <div className="videoSidebar__button">
                {liked? (<FavoriteIcon fontSize="large" onClick={handleClick} /> 
                ) : (
                <FavoriteBorderIcon fontSize="large" onClick={handleClick} />)}
                <p>{liked? likes+1:likes}</p>
            </div>
            <div className="videoSidebar__button">
            <MessageIcon fontSize="large" />
            <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    );
};

export default VideoSidebar;
