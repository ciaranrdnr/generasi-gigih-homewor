import Text from './text';
import data from '../../data/data';
const Detail = () =>{
    return (
    <>
        <Text id="track-title" class="detail" url={data.name} />
        <Text id="track-artist" class="detail" url={data.artists[0].name} />
        <Text id="track-album" class="detail" url={data.album.name} />
    </>
    )
}

export default Detail;