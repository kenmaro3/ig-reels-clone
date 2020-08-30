import React, {useState, useEffect} from 'react';
import db from './firebase.js';
import './App.css';
import VideoCard from './VideoCard';


function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot =>(
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])


  return (
    <div className="app">

      <div className="app__top">

          <img 
          className="app__logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.edigitalagency.com.au%2Fwp-content%2Fuploads%2Fnew-instagram-logo-png-transparent-800x799.png&f=1&nofb=1" alt=""/>

          <h1>
            Reels
          </h1>
      </div>

      <div className="app__videos">
        {reels.map(({channel, avatarSrc, song, url, likes, shares}) =>(
          <VideoCard
          channel = {channel}
          avatarSrc={avatarSrc}
          song={song}
          url={url}
          likes={likes}
          shares={shares}
          />
        ))}
        {/* <VideoCard 
          channel='kenmaro'
          avatarSrc='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Favatar-375-456327.png&f=1&nofb=1'
          song='mysong'
          url=''
          likes={950}
          shares={30}
        
        />
        <VideoCard />
        <VideoCard /> */}
      </div>
    </div>
  );
}

export default App;
