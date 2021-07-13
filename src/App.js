import './App.css';
import data from './data.js';


function App() {
  console.log(data)
  return (
    <div className="App" >
      <div id="card-playlist">
          <img id="track-img" src={data.album.images[0].url} alt="Album" width=""/>
          <div >
            <p id="track-title" className="detail">{data.name}</p>
            <p id="track-artist" className="detail">{data.artists[0].name}</p>
            <p id="track-album" className="detail">{data.album.name}</p>
            <button id="track-button" className="detail"><div class="triangle-right"></div></button>
        </div>
      </div>
    </div>
  );
}

export default App;
