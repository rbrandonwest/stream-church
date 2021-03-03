import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import useVideos from '../hooks/useVideos'

const VidItem = ( channelId ) => {

    const [selectedVideo, setSelectedVideo] = useState(null)
    const [video, handleVideoFetch] = useVideos(channelId)

    useEffect(() => {
        setSelectedVideo(video);
    }, [video])

    // const myVidId = useVideos(channelId)
    // setVideoId(channelId)

    // useEffect(() => {
    //     setVideoId(myVidId)
    // })

    // setVideoId(useVideos(channelId));

    // useEffect(() => {
    //     handleVideoFetch(channelId)
    // })

    // const handleVideoFetch = async () => {
    //     const response = await youtube.get('/search', {
    //         params: {
    //             channelId: channelId,
    //             eventType: 'live'
    //         }
    //     })

    //     if (response.data.items.length > 0) {
    //         console.log("Live event in progress...")
    //         setVideoId(response.data.items[0].id.videoId)
    //         return (
    //             <div className="eleven wide column">
    //                 <div className="ui segment">
    //                     <div className="ui embed">
    //                         <iframe title="video player" src={`https://www.youtube.com/embed/${this.state.video}`} />
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     } else {
    //         console.log("Not live...")
    //         return (
    //             <div>
    //                 Not live...
    //             </div>
    //         )
    //     }
    // }
    console.log(video)

    return ( <div>Hello there</div> )
}

export default VidItem;

// class VidItem extends React.Component {
//     state = { videoId: '' }

//     componentDidMount() {
//         this.handleVideoFetch();
//     }


//     handleVideoFetch = async () => {
//         const response = await youtube.get('/search', {
//             params: {
//                 channelId: this.props.church.channelId,
//                 eventType: 'live'
//             }
//         })

//         if (response.data.items.length > 0) {
//             // console.log(response.data.items[0].id.videoId);
//             // return response.data.items[0].id.videoId;
//             this.setState({ video: response.data.items[0].id.videoId })
//             return (
//                 <div className="eleven wide column">
//                     <div className="ui segment">
//                         <div className="ui embed">
//                             <iframe title="video player" src={`https://www.youtube.com/embed/${this.state.video}`} />
//                         </div>
//                     </div>
//                 </div>
//             )
//         } return(
//                 <div className="eleven wide column">
//                     <div className="ui segment">
//                         <div className="ui embed">
//                             <h3>Sorry, this church is not live streaming at the moment...</h3>
//                         </div>
//                     </div>
//                 </div>
//         )
//     }

//     render() {
//         return (
//             {handleVideoFetch()}
//         )
//     }
    
// }

// export default VidItem;