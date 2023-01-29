import './App.css';
import VideoCard from './VideoCard';

function App() {
  return (
    <div className="app">
      {/* <h1>This is IG-Reels Clone</h1> */}
      <div className="app__top">
      <img 
      className="app__logo"
      src="https://img.icons8.com/fluency/2x/instagram-new.png" 
      alt="" />
      
      <h1>Reels</h1>
      </div>
      
      <div className="app__videos"> 
      {/* this is the container for all the videos */}

      <VideoCard
      channel="reels"
      avatarSrc="https://img.freepik.com/premium-vector/funny-facts-icon-bright-colored-bubble-text_421321-115.jpg?size=338&ext=jpg"
      song='test-song-song'
      url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      likes={133}
      shares={41}
      />
      <VideoCard/>
      <VideoCard/>
      </div>
    </div>
  );
}

export default App;
