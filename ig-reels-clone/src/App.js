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
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      </div>
    </div>
  );
}

export default App;
