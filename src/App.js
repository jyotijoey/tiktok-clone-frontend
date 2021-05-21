import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
      <div className="app__videos">
      {/* App Container */}
      <Video 
      link="https://player.vimeo.com/external/431279325.sd.mp4?s=0c6adeaaedb050710a164356cbe7560e26337bd8&profile_id=165&oauth2_token_id=57447761" 
      description="video description"
      channel="meghnMarkle"
      song="some random beautiful song"
      likes={111}
      messages={222}
      shares={333}
      />
      <Video 
        link="https://player.vimeo.com/external/501753662.sd.mp4?s=23a724f2b358d9407f69af4d6630d72eeacde3cc&profile_id=165&oauth2_token_id=57447761"
      />
      <Video 
        link="https://player.vimeo.com/external/380067313.sd.mp4?s=c25474c213a2f80f5dc80aef97e2fd8574758205&profile_id=165&oauth2_token_id=57447761"
      />
      </div>
    </div>
  );
}

export default App;
