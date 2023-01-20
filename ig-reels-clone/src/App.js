import './App.css';

function App() {
  return (
    <div className="app">
      {/* <h1>This is IG-Reels Clone</h1> */}
      <div className="app__top">
      <img 
      className="app__logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TNmrdCA6X6BCmHsmvC9wAUjim9md8lnJ0g&usqp=CAU" 
      alt="" />
      
      <h1>Reels</h1>
      </div>
      
      <div className="app__videos">
      {/* Main Veritcally scrollable video container */}
      </div>
    </div>
  );
}

export default App;
