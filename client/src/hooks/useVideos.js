import { useState, useEffect } from 'react'
import youtube from '../apis/youtube';
import churches from '../apis/churches'

const useVideos = (channelId) => {
    const [video, setVideo] = useState();

    useEffect(() => {
        handleVideoFetch(channelId)
    }, [channelId])

    const handleVideoFetch = async () => {
        const response = await youtube.get('/search', {
            params: {
                channelId: channelId,
                eventType: 'live'
            }
        })

        if (response.data.items.length > 0) {
            setVideo(response.data.items[0].id.videoId)
        } else {
            setVideo(null);
        }
    }

    return [video, handleVideoFetch];
}

export default useVideos;