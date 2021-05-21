import React from 'react';
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote"


function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@alexMeghan</h3>
                <p>This is the description</p>
                <div className="videoFooter__ticker">
                <MusicNoteIcon />
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
