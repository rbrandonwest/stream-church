import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchChurches } from '../../actions'

class ChurchList extends React.Component {
    componentDidMount() {
        this.props.fetchChurches();
    }

    // renderAdmin(church) {
    //     if (church.userId === this.props.currentUserId) {
    //         return <div>Edit/Delete</div>
    //     }
    // }

    renderList() {
        if (this.props.isSignedIn) {
        return this.props.churches.map(church => {
            return (
                <div className="item" key={church.id}>
                    <div className="right floated content">
                        <Link className="ui button primary" to={`/churches/edit/${church.id}`}>Edit</Link>
                        <button className="ui button negative">Delete</button>
                    </div>

                    <div className="header">{church.churchName}</div>
                    <div className="channelName" style={{color: 'gray', fontSize: '10px'}}>Channel Name: {church.channelName}</div>
                    <div className="location">{church.zipcode}</div>
                </div>
            )
        })
    }
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/churches/new" className="ui button primary">
                        Add Church
                    </Link>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <h2>Churches</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { churches: Object.values(state.churches), currentUserId: state.auth.userId, isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { fetchChurches })(ChurchList);