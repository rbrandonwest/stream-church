import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import ReactPlayer from 'react-player';
import { connect, useSelector } from 'react-redux';
import Comments from './Comments'
import { fetchChurch } from '../actions';
import useChurch from '../hooks/useChurch';
import VidItem from './VidItem';

const Testing = ( channelId ) => {
    const [myChurch, setMyChurch] = useState();
    // const [channelId, setChannelId] = useState();
    const [video, setVideo] = useState();
    const [videoId] = useChurch(channelId);

    // useEffect(() => {
    //     setVideo(videoId);
    // }, [])

    // setChannelId(props.church.channelId);

    console.log(channelId)
    if (videoId) {
        return (
            <div>
                <ReactPlayer
                    url={`https://www.youtube.com/embed/${videoId}`}
                    playing={true}
                    controls={true}
                />
            </div>
        )    
    } else {
        return (
            <div className="content">
            <div className="center">
                <h2>There's no live stream right now...Come back later!</h2>
                </div>
            </div>
        )
    }
}

export default Testing;

// const mapStateToProps = (state, ownProps) => {
//     return { church: state.churches[ownProps.match.params.id] }
// }

// export default connect(mapStateToProps, { fetchChurch })(Testing);



// class PlayerPage extends React.Component {
//     state = { videoId: '', channelId: '' }

//     componentDidMount() {
//         this.props.fetchChurch(this.props.match.params.id)
//         this.testStuff();
//     }

//     // componentDidUpdate() {
//     //     this.handleVideoFetch(this.props.church.channelId)
//     // }

//     myChurchFetch = () => {
//         const response = this.props.fetchChurch(this.props.match.params.id);
//         this.setState({ channelId: response })
//     }

//     testStuff = () => {
//         console.log(this.props)
//     }

//     handleVideoFetch = async (newId) => {
//         this.setState({ channelId: this.props.church.channelId})
//         console.log(this.state.channelId)
//         const response = await youtube.get('/search', {
//             params: {
//                 channelId: newId,
//                 eventType: 'live'
//             }
//         })
//         console.log(response);

//         if (response.data.items.length > 0) {
//             this.setState({ videoId: response.data.items[0].id.videoId })
//         } else {
//             console.log("Not live...")
//         }
//     }


//     render() {
//         if (!this.props.church) {
//             return <div>Loading...</div>
//         }
//         return (
//             <div className="ui container">
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <div className="ui segment">
//                                 <div className="ui embed">
//                                     <ReactPlayer
//                                         url={`https://www.youtube.com/embed/${this.state.videoId}`}
//                                         playing={true}
//                                         controls={true}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                         {/* <VidItem channelId={this.props.church.channelId} /> */}
//                         <div className="five wide column">
//                         <div className="ui">
//                             <h2 className="ui header">{this.props.church.churchName}</h2>
//                             <h4>2K Members</h4>
//                             <br />
//                             <p>{this.props.church.description}</p>
//                             <h4>{this.props.church.location}</h4>
//                             <h4>Pastor: {this.props.church.pastor}</h4>
//                             <h4>Website: <span><a href={`https://${this.props.church.website}`}>{this.props.church.website}</a></span></h4>
//                             <button className="ui button">Visiting</button>
//                             <button className="ui button">Home Church</button>
//                         </div>
//                         </div>
//                     </div>
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <div className="ui segment">
//                                 <Comments />
//                             </div>
//                         </div>
//                         <div className="five wide column">

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//         }
// }

// const mapStateToProps = (state, ownProps) => {
//     return { church: state.churches[ownProps.match.params.id] }
// }

// export default connect(mapStateToProps, { fetchChurch })(PlayerPage);


// // const PlayerPage = () => {

// //     const [church, setChurch] = useState();
// //     const [videoId, setVideoId] = useState();
// //     const [channelId, setChannelId] = useState();



// // }

// // const myChurch = useSelector(fetchChurch(this.props.match.params.id));
// // console.log(myChurch);