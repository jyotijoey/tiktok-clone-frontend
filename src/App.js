import React, {useEffect, useState} from "react";
import axios from './axios';
import './App.css';
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([]);



 useEffect(() => {
   async function fetchPosts() {
     const response = await axios.get("/v2/posts");

     setVideos(response.data);

    //  console.log(videos);

     return response;
   }

   fetchPosts();
   
 }, [])
  
  return (
    <div className="app">
      <div className="app__videos">
      {console.log(videos)}
      {/* App Container */}
      {videos.map(({link, description, channel, song, likes, messages, shares}) => (
      <Video 
      link={link}
      description={description}
      channel={channel}
      song={song}
      likes={likes}
      messages={messages}
      shares={shares}
      />
      ))}
      </div>
    </div>
  );
}

export default App;
