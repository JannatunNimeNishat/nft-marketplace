import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ArtistPage = () => {

    const artist_id = useParams()
    

    const [singleArtistInfo,setSingleArtistInfo] = useState()

    useEffect(()=>{
        fetch('../../../public/json/artists.json')
        .then(res => res.json())
            .then(data => {
           
                const singleData = data.filter(singleArtist => singleArtist._id === parseInt(artist_id?.id))
               
                setSingleArtistInfo(singleData) 
            })
    },[])
    console.log(singleArtistInfo);
    return (
        <div>
            <h3>This is artis page</h3>
        </div>
    );
};

export default ArtistPage;