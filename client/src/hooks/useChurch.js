import { useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import churches from '../apis/churches'
import { fetchChurch } from '../actions' 

const useChurch = ({ channelId }) => {
    const [videoId, setVideoId] = useState();

    useEffect(() => {
        handleVideoFetch(channelId)
    }, [])

    const handleVideoFetch = async channelId => {
        console.log(channelId);
        const response = await youtube.get('/search', {
            params: {
                channelId: channelId,
                eventType: 'live'
            }
        })

        if (response.data.items.length > 0) {
            setVideoId(response.data.items[0].id.videoId)
            console.log(videoId);
        } else {
            setVideoId(null);
            console.log("Not live")
        }
    }

    return [videoId];
}

export default useChurch;