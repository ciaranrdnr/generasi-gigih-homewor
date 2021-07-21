import './App.css';
import Track from './components/track/index'
import data from './data/0-2-3';
import SearchBar from './components/searchBar/index'

function App() {
  return (
    <div className="App">
      <SearchBar/>
      {/* <div className="track-viewer">
            {
            data.map((track, i)=>{return(
              <Track 
              title={track.name}
              artist={track.artists[0].name} 
              album={track.album.name} 
              url={track.album.images[0].url}
              key={i}
              />
      )})}
      </div> */}
      
    </div>
  );
}

export default App;
