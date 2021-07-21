import Text from '../text/index';
import Button from '../button/index';

const Track = (props) =>{
    return (
                <div id="card-playlist">
                    <img id="track-img" src={props.url} alt={props.title} />
                    <div >
                        <Text class="detail track-title" value={props.title} />
                        <Text class="detail track-artist" value={props.artist}/>
                        <Text class="detail track-album" value={props.album} />
                        <Button id="track-button" class="detail"/>
                    </div>
                </div>)
      
}

export default Track;