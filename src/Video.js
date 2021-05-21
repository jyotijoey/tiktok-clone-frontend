import React, { useRef, useState } from 'react';
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () =>{
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            src="https://player.vimeo.com/external/353226442.sd.mp4?s=ed709010e22497aeffa2977fa3fa32b7573ebcc0&profile_id=165&oauth2_token_id=57447761">
            </video>

           
            {/* video footer */}
            <VideoFooter />
            

            {/* video sidebar */}
            <VideoSidebar />
            
        </div>
    )
}

export default Video
