import './App.css';
import Track from './components/track/index'
import data from './data/0-2-3';


function App() {
  console.log(data)
  return (
    <div className="App">
      
      {
      data.map((track)=>{return(
        <Track title={track.name} artist={track.artists[0].name} album={track.album.name} url={track.album.images[0].url}/>
)})}
    </div>
  );
}

export default App;
