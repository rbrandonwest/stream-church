import React from 'react';
import { connect } from 'react-redux';
import { fetchChurches } from '../../actions'
import ChurchItem from './ChurchItem'

class ChurchList extends React.Component {
    componentDidMount() {
        this.props.fetchChurches();
    }

    renderList() {
        return this.props.churches.map(church => {
            return (
                <div className="item" key={church.id}>
                    <div className="content">{church.churchName}</div>
                    <div className="channelName" style={{color: 'gray', fontSize: '10px'}}>Channel Name: {church.channelName}</div>
                    <div className="location">{church.zipcode}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Churches</h2>
                <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { churches: Object.values(state.churches) }
}

export default connect(mapStateToProps, { fetchChurches })(ChurchList);