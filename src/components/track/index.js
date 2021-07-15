import data from '../../data/data.js';
import Detail from '../text/index';
import Button from '../button/index';
import BG from '../bg/index';

const Track = () =>{
    return (
    <>
        <BG url={data.album.images[0].url}/>
        <div id="card-playlist">
            <img id="track-img" src={data.album.images[0].url} alt="Album" />
            <div >
                <Detail/>
                <Button id="track-button" class="detail"/>
            </div>
        </div>
    </>
    )
}

export default Track;