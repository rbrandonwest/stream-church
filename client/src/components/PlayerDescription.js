// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux'
// import { fetchChurch } from '../actions'

// class PlayerDescription extends React.Component {

//     // const [church, setChurch] = useState(null);
    

//     // const thePath = window.document.URL;
//     // const getChurch = thePath.substring(thePath.lastIndexOf('/') + 1);

//     // const myChurch = `http://localhost:3001/churches/${getChurch}`
//     // console.log(fetchChurch(1).churchName)

//     componentDidMount() {
//         // this.props.fetchChurch(this.props.match.params.channelName);
//     }



//     render() {
//     return (
        
//         <div className="five wide column">
//         <h2 className="ui header">{}</h2>
//         <h4>2K Members</h4>
//         <br />
//         <p>Coral Ridge Presbyterian is a PCA church located in Fort Lauderdale, FL. Our vision is to be a Gospel-centered church that offers hope to South Florida through the reconciliation of people and the renewal of all things.</p>
//         <h4>Fort Lauderdale, FL</h4>
//         <h4>Pastor: Rob Pacienza</h4>
//         <h4>Website: crpc.org</h4>
//         <button className="ui button">Visiting</button>
//         <button className="ui button">Home Church</button>
//     </div>

//     )
//     }
// }

// // const mapStateToProps = (state, ownProps) => {
// //     return { church: state.churches[ownProps.match.params.channelName]}
// // };

// // export default connect(mapStateToProps, { fetchChurch })(PlayerDescription);

// export default PlayerDescription;