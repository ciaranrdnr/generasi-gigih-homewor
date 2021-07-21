import {useState} from 'react';
import axios from 'axios';
const SearchBar = () =>{
    const [q, setQ] = useState('');
    const [URL, setURL] = useState('');
    const scopes = ['playlist-modify-private'];
    const [track, setTrack] = useState([]);

    const getQuery = (event)=>{
        setQ(event.target.value);
        console.log(q);
    }
    const getTrack = ()=>{
        setURL(`https://api.spotify.com/v1/search?q=${q}&offset=5&type=track&limit=5`)
        axios.get({url: URL}, 
                {headers: {'Authorization': 'Bearer '+ process.env.REACT_APP_SPOTIFY_TOKEN}}
                )
            .then((res)=> res.json())
            .then((res)=> setTrack(res.track.item))
            .then((res)=>{
                console.log("berhasil gan",res)
            })
            .catch((err)=>{
                console.log("URL",URL);
                console.log("Authorization:",'Bearer '+ process.env.REACT_APP_SPOTIFY_TOKEN);

            })
        };
    return(
        <div>
            <input type="search" id="search-bar" name="search-bar" placeholder="Search..." value={q} onChange={getQuery}/>
            <input type="submit" onClick={getTrack}/>
        </div>
    );
}
export default SearchBar;