import './App.css';
import { collection, onSnapshot } from "firebase/firestore";
import db from './firebase';
// import firebase from './firebase';
import VideoCard from './VideoCard';
import { useState, useEffect} from 'react';

function App() {
  const [reels, setReels] = useState([]);

  // const fetchPost = async () => {
  //   await getDocs(collection(db, "reels"))
  //     .then((querySnapshot) => {
  //       const newData = querySnapshot.docs
  //                   .map((doc) => (doc.data()));
  //               setReels(newData);
  //     })
  // };
  
  useEffect(()=> {  /*To make sure the app component loads once and never again unless there is a change in the dependencies array passed to it */

  /*Below code is to take the details from the collection we made into firebase database and take all its details as snapshot and this is also dynamic so when the details in the reels collection is changed, the snapshot function is fired again with the latest details on the database */
  // fetchPost();
  onSnapshot(collection(db, "reels"), (snapshot) => {
    setReels(snapshot.docs.map(doc => doc.data()))
  })
  
  // collection(db,'reels').onSnapshot((snapshot) => (
  //   setReels(snapshot.docs.map(doc => doc.data()))
  // ))
  
  },[]);

  return (
    <div className="app">
      {/* <h1>This is IG-Reels Clone</h1> */}
      <div className="app__top">
      <img 
      className="app__logo"
      src="https://img.icons8.com/fluency/2x/instagram-new.png" 
      alt="" />
      
      {/* <h1>Reels</h1> */}
      </div>
      
      <div className="app__videos"> 
      {/* this is the container for all the videos */}

      {reels.map(({channel, avatarSrc, song, url, likes, shares}) => (
        <VideoCard
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        url={url}
        likes={likes}
        shares={shares}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
